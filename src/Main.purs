module Main where

import Prelude
import Control.Monad.Eff.Console
import Control.Monad.Eff

foreign import data PHANTOM :: !
foreign import createPhantom :: forall eff. Eff (x :: PHANTOM | eff) Unit

-- attempt to print page object's settings
main = do
  createPhantom
  log "Hello sailor!"
