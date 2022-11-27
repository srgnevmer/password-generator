import { FC } from "react";
import {
  Layout,
  Header,
  Description,
  PasswordSection,
  SettingsSection,
} from "../ui";

export const App: FC = () => {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col bg-slate-900">
        <Header />
        <div className="flex grow justify-center">
          <div className="w-full max-w-5xl flex flex-col items-center grow">
            <Description />
            <PasswordSection />
            <SettingsSection />
          </div>
        </div>
      </div>
    </Layout>
  );
};
