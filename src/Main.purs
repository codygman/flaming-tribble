module Main where

import Prelude
import Control.Monad.Eff.Console
import Control.Monad.Eff

foreign import data PHANTOM :: !
foreign import data Phantom :: *                    
foreign import withPhantom :: forall eff. (Eff (x :: PHANTOM | eff) Phantom -> Eff (x :: PHANTOM | eff) Unit) -> Eff (x :: PHANTOM | eff) Unit
foreign import exitPhantom :: forall eff. Eff (x :: PHANTOM | eff) Phantom -> Eff (x :: PHANTOM | eff) Unit

-- attempt to print page object's settings
main = do
  withPhantom $ \ph -> do
    exitPhantom ph
