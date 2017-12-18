/**
 * Created by jtongay on 6/27/17.
 */
import { ProfileComponent } from './profile.component'
import { LoginComponent } from './login.component'

export const userRoutes = [
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
]