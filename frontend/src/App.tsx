import { Layout } from "./components/Layout";
import { TanStackProvider } from "./plugins/TanStackProvider";

export const App = () => {
  return (
    <TanStackProvider>
      <Layout>
        <h2>Hola mundo</h2>
      </Layout>
    </TanStackProvider>
  );
};
