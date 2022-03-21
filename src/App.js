import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./App.css";
import AppProductCardCollection from "./ui-components/AppProductCardCollection";
import { AmplifyChatbot } from "@aws-amplify/ui-react/legacy";
import AppNavBar from "./ui-components/AppNavBar";

function App({ signOut }) {
  return (
    <div className="flex p-4 flex-col bg-gray-300 w-full">
      <AppNavBar width={"100vw"} signOut={signOut} />
      <div className="flex w-full flex-row justify-between m-4">
        <AppProductCardCollection />
        <AmplifyChatbot
          style={{
            backgroundColor: "white",
          }}
          botName="OrderFlowers_dev"
          botTitle="My ChatBot"
          welcomeMessage="Hello, how can I help you?"
        />
      </div>
    </div>
  );
}

export default withAuthenticator(App);
