module Main where

import Prelude
import Control.Monad.Eff.Console
import Control.Monad.Eff

foreign import data PAGE :: !
foreign import data Page :: *
foreign import data Settings :: *
foreign import createPage :: forall eff. Eff (page :: PAGE | eff) Page
foreign import getPageSettings :: Page -> Settings

-- attempt to print page object's settings
main = do
  page <- createPage
  let settings = getPageSettings page
  log "Hello sailor!"
