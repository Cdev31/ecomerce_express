import passport from "passport"

import { googleStrategy } from './google-strategy'
import { localStrategy } from "./local-strategy"
import { jwtStrategy } from "./jwt-strategy"

passport.use( 'sign-up-google' ,googleStrategy )
passport.use( localStrategy )
passport.use( jwtStrategy )