import React, { Fragment, useState } from "react";

import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";
import { Main } from "./components/layout/main";
import { Logo } from "./components/photos/logo";
import { Photos } from "./components/photos/photos";
import { Preview } from "./components/photos/preview";
import { Portal } from "./components/ui/portal";

export const App = () => {
  const [selectedPhoto, setSelectedPhoto] = useState();

  return (
    <Fragment>
      <Header>
        <div className="w-1/4 mx-auto">

        <Logo />
        </div>
        <h1 className="font-montserrat font-thin text-3xl text-primary-default">
          ME AND THE BOYS
        </h1>
      </Header>

      <Main>
        <Photos setSelectedPhoto={setSelectedPhoto} />
      </Main>

      <Footer>
        <p className="font-montserrat">
          Made with ❤️ by{" "}
          <a
            className="underline"
            href="https://github.com/alessio-libardi/me-and-the-boys"
          >
            Me and the Boys
          </a>
        </p>
      </Footer>

      {!!selectedPhoto && (
        <Portal>
          <Preview photo={selectedPhoto} onEscape={() => setSelectedPhoto()}/>
        </Portal>
      )}
    </Fragment>
  );
};
