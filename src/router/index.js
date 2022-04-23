import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ButtonView from '@/views/ButtonView.vue'
import CardView from '@/views/CardView.vue'
import CheckboxView from '@/views/CheckboxView.vue'
import CircularProgressView from '@/views/CircularProgressView.vue'
import DialogView from '@/views/DialogView.vue'
import DrawerView from '@/views/DrawerView.vue'
import DrawerStandardNoHeaderView from '@/views/DrawerStandardNoHeaderView.vue'
import DrawerStandardView from '@/views/DrawerStandardView.vue'
import DrawerDismissibleView from '@/views/DrawerDismissibleView.vue'
import DrawerModalView from '@/views/DrawerModalView.vue'
import FabView from '@/views/FabView.vue'
import FormfieldView from '@/views/FormfieldView.vue'
import IconView from '@/views/IconView.vue'
import IconButtonView from '@/views/IconButtonView.vue'
import IconButtonToggleView from '@/views/IconButtonToggleView.vue'
import LinearProgressView from '@/views/LinearProgressView.vue'
import ListView from '@/views/ListView.vue'
import MenuView from '@/views/MenuView.vue'
import RadioView from '@/views/RadioView.vue'
import RippleView from '@/views/RippleView.vue'
import SelectView from '@/views/SelectView.vue'
import SliderView from '@/views/SliderView.vue'
import SnackbarView from '@/views/SnackbarView.vue'
import SwitchView from '@/views/SwitchView.vue'
import TabsView from '@/views/TabsView.vue'
import TabsRtlView from '@/views/TabsRtlView.vue'
import TextareaView from '@/views/TextareaView.vue'
import TextfieldView from '@/views/TextfieldView.vue'
import TopAppBarView from '@/views/TopAppBarView.vue'
import TopAppBarFixedView from '@/views/TopAppBarFixedView.vue'
import TopAppBarFixedIframeView from '@/views/TopAppBarFixedIframeView.vue'
import TopAppBarIframeView from '@/views/TopAppBarIframeView.vue'
const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/button', name: 'button', component: ButtonView },
  { path: '/card', name: 'card', component: CardView },
  { path: '/checkbox', name: 'checkbox', component: CheckboxView },
  { path: '/circular-progress', name: 'circular-progress', component: CircularProgressView },
  { path: '/dialog', name: 'dialog', component: DialogView },
  { path: '/drawer', name: 'drawer', component: DrawerView },
  { path: '/drawer_standard_no_header', name: 'drawer_standard_no_header', component: DrawerStandardNoHeaderView },
  { path: '/drawer_standard', name: 'drawer_standard', component: DrawerStandardView },
  { path: '/drawer_dismissible', name: 'drawer_dismissible', component: DrawerDismissibleView },
  { path: '/drawer_modal', name: 'drawer_modal', component: DrawerModalView },
  { path: '/fab', name: 'fab', component: FabView },
  { path: '/formfield', name: 'formfield', component: FormfieldView },
  { path: '/icon', name: 'icon', component: IconView },
  { path: '/icon-button', name: 'icon-button', component: IconButtonView },
  { path: '/icon-button-toggle', name: 'icon-button-toggle', component: IconButtonToggleView },
  { path: '/linear-progress', name: 'linear-progress', component: LinearProgressView },
  { path: '/list', name: 'list', component: ListView },
  { path: '/menu', name: 'menu', component: MenuView },
  { path: '/radio', name: 'radio', component: RadioView },
  { path: '/ripple', name: 'ripple', component: RippleView },
  { path: '/select', name: 'select', component: SelectView },
  { path: '/slider', name: 'slider', component: SliderView },
  { path: '/snackbar', name: 'snackbar', component: SnackbarView },
  { path: '/switch', name: 'switch', component: SwitchView },
  { path: '/tabs', name: 'tabs', component: TabsView },
  { path: '/tabs_rtl', name: 'tabs_rtl', component: TabsRtlView },
  { path: '/textarea', name: 'textarea', component: TextareaView },
  { path: '/textfield', name: 'textfield', component: TextfieldView },
  { path: '/top-app-bar', name: 'top-app-bar', component: TopAppBarView },
  { path: '/top-app-bar-fixed', name: 'top-app-bar-fixed', component: TopAppBarFixedView },
  { path: '/top-app-bar-fixed_iframe', name: 'top-app-bar-fixed_iframe', component: TopAppBarFixedIframeView },
  { path: '/top-app-bar_iframe', name: 'top-app-bar_iframe', component: TopAppBarIframeView },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
