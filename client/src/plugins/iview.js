import Vue from 'vue'
import {Button, Notice, Card, FormItem, Icon, Form, Input, Table, Upload, Alert} from 'view-design'

Vue.component('Button', Button);
Vue.component('Notice', Notice);
Vue.component('Card', Card);
Vue.component('FormItem', FormItem);
Vue.component('Icon', Icon);
Vue.component('Form', Form);
Vue.component('Input', Input);
// Vue.component('Table', Table);
Vue.component("Upload", Upload);
Vue.component("Alert", Alert);

import 'view-design/dist/styles/iview.css'

Vue.prototype.$Notice = Notice;
