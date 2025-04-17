import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/main.css'
import BaseButton from '@/components/Base/BaseButton.vue'
import BaseComboboxAutocomplete from '@/components/Base/BaseComboboxAutocomplete.vue'
import BaseModalDialog from '@/components/Base/BaseModalDialog.vue'
import BaseRadioGroup from '@/components/Base/BaseRadioGroup.vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component("BaseButton", BaseButton)
app.component("BaseComboboxAutocomplete", BaseComboboxAutocomplete)
app.component("BaseModalDialog", BaseModalDialog)
app.component("BaseRadioGroup", BaseRadioGroup)

app.mount('#app')
