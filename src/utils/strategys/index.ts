import passport from "passport"

import { googleStrategy } from './google-strategy'

passport.use( 'sign-up-google' ,googleStrategy )