import { Route, Switch, Link } from "wouter-preact";

import { Routes } from "./routes";
import { Home } from "./components/pages/Home";
import { IconLabel } from "./components/ui/Icon";
import { Header } from "./components/layout/Header";

export function App() {
  return (
    <div class="h-full flex flex-col">
      <div class="shadow-md">
        <Header />
      </div>
      <div class="flex-grow overflow-auto px-2 py-4">
        <div class="container mx-auto">
          <Switch>
            <Route path={Routes.Home}>{Home}</Route>
            <Route>
              <h1 className="text-2xl">
                <IconLabel icon="help">Not Found</IconLabel>
              </h1>
              This page you were looking for could not be found.
              <br />
              Perhaps you'd like to visit{" "}
              <Link to={Routes.Home} class="underline">
                home
              </Link>{" "}
              instead.
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}
