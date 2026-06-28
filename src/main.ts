import { createPinia } from 'pinia';

import { createApp } from 'vue';
import { vDraggable } from '@/lib/directives/v-draggable.ts';

import { vTooltip } from '@/lib/directives/v-tooltip.ts';
import App from './app.vue';

import './assets/styles/index.css';

const app = createApp(App);

app.use(createPinia());
app.directive('tooltip', vTooltip);
app.directive('draggable', vDraggable);
app.mount('#app');
