import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Apparel from "./pages/Apparel";
import Hats from "./pages/Hats";
import Kits from "./pages/Kits";
import Customization from "./pages/Customization";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Events from "./pages/Events";
import Sustainability from "./pages/Sustainability";
import Layout from "./components/Layout";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/apparel" component={Apparel} />
        <Route path="/hats" component={Hats} />
        <Route path="/kits" component={Kits} />
        <Route path="/customization" component={Customization} />
        <Route path="/about" component={About} />
        <Route path="/how-it-works" component={HowItWorks} />
        <Route path="/events" component={Events} />
        <Route path="/sustainability" component={Sustainability} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
