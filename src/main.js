import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faAt, faLock, faPlus, faUser, faEye, faEyeSlash, faPen, faGear, faCartShopping, faBrazilianRealSign, faArrowRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faAt, faLock, faPlus, faUser, faEye, faEyeSlash, faPen, faGear, faCartShopping, faBrazilianRealSign, faArrowRightToBracket, faUserPlus)

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
