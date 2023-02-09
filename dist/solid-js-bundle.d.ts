import { createSignal, createEffect, createMemo, createRoot, createContext, useContext, createResource, Suspense, SuspenseList, on, batch, lazy, untrack, Show, For, Index, Switch, Match, mergeProps, splitProps, children, onMount, onCleanup, useTransition } from 'solid-js';
/**** observable - simplifies signal usage ****/
declare function observable(Value: any): (newValue?: any) => any;
import html from 'solid-js/html';
import { render, Dynamic, Portal, ErrorBoundary } from 'solid-js/web';
import { createStore, reconcile } from 'solid-js/store';
export { createSignal, createEffect, createMemo, createRoot, createContext, useContext, createResource, Suspense, SuspenseList, on, batch, lazy, untrack, Show, For, Index, Switch, Match, mergeProps, splitProps, children, onMount, onCleanup, useTransition, html, render, Dynamic, Portal, ErrorBoundary, createStore, reconcile, observable };
