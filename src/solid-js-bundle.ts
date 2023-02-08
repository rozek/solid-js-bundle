  import {
    createSignal, createEffect, createMemo, createResource, Suspense,
      on, batch, lazy, untrack,
    Show, For, Index, Switch, Match,
    onMount, onCleanup,
    useTransition
  } from 'solid-js'

/**** observable - simplifies signal usage ****/

  function observable (Value:any) {
    const [Getter,Setter] = createSignal(Value)
    return function observable (newValue?:any) {
      return (arguments.length === 0 ? Getter() : Setter(newValue))
    }
  }

  import html from 'solid-js/html'

  import {
    render, Dynamic, Portal,
    ErrorBoundary
  } from 'solid-js/web'

  import { createStore } from 'solid-js/store'

  export {
    createSignal, createEffect, createMemo, createResource, Suspense,
      on, batch, lazy, untrack,
    Show, For, Index, Switch, Match,
    onMount, onCleanup,
    useTransition,
    html,
    render, Dynamic, Portal,
    ErrorBoundary,
    createStore,
    observable
  }
