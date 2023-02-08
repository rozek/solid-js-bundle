import { createSignal, createEffect, createMemo, createResource, Suspense, on, batch, lazy, untrack, Show, For, Index, Switch, Match, onMount, onCleanup, useTransition } from 'solid-js';
/**** observable - simplifies signal usage ****/
declare function observable(Value: any): (newValue?: any) => any;
import html from 'solid-js/html';
import { render, Dynamic, Portal, ErrorBoundary } from 'solid-js/web';
import { createStore } from 'solid-js/store';
export { createSignal, createEffect, createMemo, createResource, Suspense, on, batch, lazy, untrack, Show, For, Index, Switch, Match, onMount, onCleanup, useTransition, html, render, Dynamic, Portal, ErrorBoundary, createStore, observable };
