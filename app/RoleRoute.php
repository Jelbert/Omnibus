<?php

namespace App;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;

class RoleRoute
{
    protected $routes;

    protected $namespace = 'App\Http\Controllers\Reports';

    public function __construct()
    {
        $this->routes = collect(Route::getRoutes())->filter(function ($router) {
            return str_starts_with($router->getActionName(), $this->namespace);
        })->values();
    }

    public static function all()
    {
        $static = new static;

        return $static->routes;
    }

    public static function transformed()
    {
        $static = new static;

        return $static->routes->map(function ($route) use ($static) {
            $action = $route->getActionName();
            $controller = $static->getController($action);

            return collect([
                'controller' => $action,
                'controller_name' => $controller['name'],
                'controller_label' => $static->getRouteLabel($action),
                'controller_action' => $controller['action'],
            ]);
        })->groupBy(function ($item) {
            return $item['controller_name'];
        })->map(function ($router) {
            return $router->flatMap(function ($item) use ($router) {
                return [
                    'label' => $item['controller_label'],
                    'actions' => $router
                ];
            });
        });
    }

    public static function getActionName()
    {
        return static::all()->map->getActionName();
    }

    protected function getController($route)
    {
        list($name, $action) = explode('@', class_basename($route));

        return compact('name', 'action');
    }

    protected function getRouteLabel($route)
    {
        $step1 = explode($this->namespace, $route)[1];
        $step2 = stripslashes($step1);
        $step3 = Str::snake($step2);
        $step4 = array_unique(explode('_', $step3));
        $step5 = implode('', $step4);
        $step6 = explode('Controller@', $step5)[0];
        $step7 = Str::snake($step6, ' ');

        return $step7;
    }
}
