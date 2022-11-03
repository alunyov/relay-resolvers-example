import { RelayEnvironmentProvider } from "react-relay";
import { initRelayEnvironment } from "src/RelayEnvironment";
import "styles/globals.css";
import type { AppProps, AppContext, AppInitialProps } from "next/app";
import App from "next/app";
import { StoreSnapshot } from "src/stores/TodoStore";

import { getStoreSnapshot, initLocalStore } from "src/stores/TodoStore";

type AppOwnProps = { storeSnapshot: StoreSnapshot };

function MyApp({
  Component,
  pageProps,
  storeSnapshot,
}: AppProps & AppOwnProps) {
  initLocalStore(storeSnapshot);
  const environment = initRelayEnvironment();

  return (
    <RelayEnvironmentProvider environment={environment}>
      <Component {...pageProps} />
    </RelayEnvironmentProvider>
  );
}

MyApp.getInitialProps = async (
  appContext: AppContext
): Promise<AppOwnProps & AppInitialProps> => {
  const appProps = await App.getInitialProps(appContext);

  return {
    ...appProps,
    storeSnapshot: await getStoreSnapshot(),
  };
};

export default MyApp;
