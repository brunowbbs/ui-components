import { jsxs as R, jsx as g } from "react/jsx-runtime";
import v, { useRef as b, useState as $, useMemo as K, useEffect as D, useCallback as O, forwardRef as P } from "react";
import { TableSelectAllCell as j, TableCheckboxCell as U, TableCell as q } from "./cell/index.js";
import { TableRowGroup as _, TableHeaderRow as G, TableColumnHeader as W } from "./header/index.js";
import { TableRow as Y } from "./row/index.js";
import { o as J } from "../../index.m-fyFwXEot.js";
import { g as x, h as I, i as k, j as A, k as Q, l as X } from "../../import-CJ5HjZVc.js";
import { $ as Z } from "../../index-CsTNTqez.js";
class m extends Set {
  constructor(e, t, l) {
    super(e), e instanceof m ? (this.anchorKey = t || e.anchorKey, this.currentKey = l || e.currentKey) : (this.anchorKey = t, this.currentKey = l);
  }
}
function ee(a, e) {
  if (a.size !== e.size)
    return !1;
  for (let t of a)
    if (!e.has(t))
      return !1;
  return !0;
}
function te(a) {
  let { selectionMode: e = "none", disallowEmptySelection: t, allowDuplicateSelectionEvents: l, selectionBehavior: s = "toggle", disabledBehavior: o = "all" } = a, r = b(!1), [, h] = $(!1), n = b(null), c = b(null), [, d] = $(null), i = K(() => E(a.selectedKeys), [
    a.selectedKeys
  ]), u = K(() => E(a.defaultSelectedKeys, new m()), [
    a.defaultSelectedKeys
  ]), [f, y] = Z(i, u, a.onSelectionChange), w = K(() => a.disabledKeys ? new Set(a.disabledKeys) : /* @__PURE__ */ new Set(), [
    a.disabledKeys
  ]), [S, C] = $(s);
  s === "replace" && S === "toggle" && typeof f == "object" && f.size === 0 && C("replace");
  let B = b(s);
  return D(() => {
    s !== B.current && (C(s), B.current = s);
  }, [
    s
  ]), {
    selectionMode: e,
    disallowEmptySelection: t,
    selectionBehavior: S,
    setSelectionBehavior: C,
    get isFocused() {
      return r.current;
    },
    setFocused(p) {
      r.current = p, h(p);
    },
    get focusedKey() {
      return n.current;
    },
    get childFocusStrategy() {
      return c.current;
    },
    setFocusedKey(p, L = "first") {
      n.current = p, c.current = L, d(p);
    },
    selectedKeys: f,
    setSelectedKeys(p) {
      (l || !ee(p, f)) && y(p);
    },
    disabledKeys: w,
    disabledBehavior: o
  };
}
function E(a, e) {
  return a ? a === "all" ? "all" : new m(a) : e;
}
class le {
  /**
  * The type of selection that is allowed in the collection.
  */
  get selectionMode() {
    return this.state.selectionMode;
  }
  /**
  * Whether the collection allows empty selection.
  */
  get disallowEmptySelection() {
    return this.state.disallowEmptySelection;
  }
  /**
  * The selection behavior for the collection.
  */
  get selectionBehavior() {
    return this.state.selectionBehavior;
  }
  /**
  * Sets the selection behavior for the collection.
  */
  setSelectionBehavior(e) {
    this.state.setSelectionBehavior(e);
  }
  /**
  * Whether the collection is currently focused.
  */
  get isFocused() {
    return this.state.isFocused;
  }
  /**
  * Sets whether the collection is focused.
  */
  setFocused(e) {
    this.state.setFocused(e);
  }
  /**
  * The current focused key in the collection.
  */
  get focusedKey() {
    return this.state.focusedKey;
  }
  /** Whether the first or last child of the focused key should receive focus. */
  get childFocusStrategy() {
    return this.state.childFocusStrategy;
  }
  /**
  * Sets the focused key.
  */
  setFocusedKey(e, t) {
    (e == null || this.collection.getItem(e)) && this.state.setFocusedKey(e, t);
  }
  /**
  * The currently selected keys in the collection.
  */
  get selectedKeys() {
    return this.state.selectedKeys === "all" ? new Set(this.getSelectAllKeys()) : this.state.selectedKeys;
  }
  /**
  * The raw selection value for the collection.
  * Either 'all' for select all, or a set of keys.
  */
  get rawSelection() {
    return this.state.selectedKeys;
  }
  /**
  * Returns whether a key is selected.
  */
  isSelected(e) {
    return this.state.selectionMode === "none" ? !1 : (e = this.getKey(e), this.state.selectedKeys === "all" ? this.canSelectItem(e) : this.state.selectedKeys.has(e));
  }
  /**
  * Whether the selection is empty.
  */
  get isEmpty() {
    return this.state.selectedKeys !== "all" && this.state.selectedKeys.size === 0;
  }
  /**
  * Whether all items in the collection are selected.
  */
  get isSelectAll() {
    if (this.isEmpty)
      return !1;
    if (this.state.selectedKeys === "all")
      return !0;
    if (this._isSelectAll != null)
      return this._isSelectAll;
    let e = this.getSelectAllKeys(), t = this.state.selectedKeys;
    return this._isSelectAll = e.every((l) => t.has(l)), this._isSelectAll;
  }
  get firstSelectedKey() {
    let e = null;
    for (let t of this.state.selectedKeys) {
      let l = this.collection.getItem(t);
      (!e || l && x(this.collection, l, e) < 0) && (e = l);
    }
    return e == null ? void 0 : e.key;
  }
  get lastSelectedKey() {
    let e = null;
    for (let t of this.state.selectedKeys) {
      let l = this.collection.getItem(t);
      (!e || l && x(this.collection, l, e) > 0) && (e = l);
    }
    return e == null ? void 0 : e.key;
  }
  get disabledKeys() {
    return this.state.disabledKeys;
  }
  get disabledBehavior() {
    return this.state.disabledBehavior;
  }
  /**
  * Extends the selection to the given key.
  */
  extendSelection(e) {
    if (this.selectionMode === "none")
      return;
    if (this.selectionMode === "single") {
      this.replaceSelection(e);
      return;
    }
    e = this.getKey(e);
    let t;
    if (this.state.selectedKeys === "all")
      t = new m([
        e
      ], e, e);
    else {
      let l = this.state.selectedKeys, s = l.anchorKey || e;
      t = new m(l, s, e);
      for (let o of this.getKeyRange(s, l.currentKey || e))
        t.delete(o);
      for (let o of this.getKeyRange(e, s))
        this.canSelectItem(o) && t.add(o);
    }
    this.state.setSelectedKeys(t);
  }
  getKeyRange(e, t) {
    let l = this.collection.getItem(e), s = this.collection.getItem(t);
    return l && s ? x(this.collection, l, s) <= 0 ? this.getKeyRangeInternal(e, t) : this.getKeyRangeInternal(t, e) : [];
  }
  getKeyRangeInternal(e, t) {
    let l = [], s = e;
    for (; s; ) {
      let o = this.collection.getItem(s);
      if ((o && o.type === "item" || o.type === "cell" && this.allowsCellSelection) && l.push(s), s === t)
        return l;
      s = this.collection.getKeyAfter(s);
    }
    return [];
  }
  getKey(e) {
    let t = this.collection.getItem(e);
    if (!t || t.type === "cell" && this.allowsCellSelection)
      return e;
    for (; t.type !== "item" && t.parentKey != null; )
      t = this.collection.getItem(t.parentKey);
    return !t || t.type !== "item" ? null : t.key;
  }
  /**
  * Toggles whether the given key is selected.
  */
  toggleSelection(e) {
    if (this.selectionMode === "none")
      return;
    if (this.selectionMode === "single" && !this.isSelected(e)) {
      this.replaceSelection(e);
      return;
    }
    if (e = this.getKey(e), e == null)
      return;
    let t = new m(this.state.selectedKeys === "all" ? this.getSelectAllKeys() : this.state.selectedKeys);
    t.has(e) ? t.delete(e) : this.canSelectItem(e) && (t.add(e), t.anchorKey = e, t.currentKey = e), !(this.disallowEmptySelection && t.size === 0) && this.state.setSelectedKeys(t);
  }
  /**
  * Replaces the selection with only the given key.
  */
  replaceSelection(e) {
    if (this.selectionMode === "none" || (e = this.getKey(e), e == null))
      return;
    let t = this.canSelectItem(e) ? new m([
      e
    ], e, e) : new m();
    this.state.setSelectedKeys(t);
  }
  /**
  * Replaces the selection with the given keys.
  */
  setSelectedKeys(e) {
    if (this.selectionMode === "none")
      return;
    let t = new m();
    for (let l of e)
      if (l = this.getKey(l), l != null && (t.add(l), this.selectionMode === "single"))
        break;
    this.state.setSelectedKeys(t);
  }
  getSelectAllKeys() {
    let e = [], t = (l) => {
      for (; l; ) {
        if (this.canSelectItem(l)) {
          let s = this.collection.getItem(l);
          s.type === "item" && e.push(l), s.hasChildNodes && (this.allowsCellSelection || s.type !== "item") && t(I(k(s, this.collection)).key);
        }
        l = this.collection.getKeyAfter(l);
      }
    };
    return t(this.collection.getFirstKey()), e;
  }
  /**
  * Selects all items in the collection.
  */
  selectAll() {
    !this.isSelectAll && this.selectionMode === "multiple" && this.state.setSelectedKeys("all");
  }
  /**
  * Removes all keys from the selection.
  */
  clearSelection() {
    !this.disallowEmptySelection && (this.state.selectedKeys === "all" || this.state.selectedKeys.size > 0) && this.state.setSelectedKeys(new m());
  }
  /**
  * Toggles between select all and an empty selection.
  */
  toggleSelectAll() {
    this.isSelectAll ? this.clearSelection() : this.selectAll();
  }
  select(e, t) {
    this.selectionMode !== "none" && (this.selectionMode === "single" ? this.isSelected(e) && !this.disallowEmptySelection ? this.toggleSelection(e) : this.replaceSelection(e) : this.selectionBehavior === "toggle" || t && (t.pointerType === "touch" || t.pointerType === "virtual") ? this.toggleSelection(e) : this.replaceSelection(e));
  }
  /**
  * Returns whether the current selection is equal to the given selection.
  */
  isSelectionEqual(e) {
    if (e === this.state.selectedKeys)
      return !0;
    let t = this.selectedKeys;
    if (e.size !== t.size)
      return !1;
    for (let l of e)
      if (!t.has(l))
        return !1;
    for (let l of t)
      if (!e.has(l))
        return !1;
    return !0;
  }
  canSelectItem(e) {
    if (this.state.selectionMode === "none" || this.state.disabledKeys.has(e))
      return !1;
    let t = this.collection.getItem(e);
    return !(!t || t.type === "cell" && !this.allowsCellSelection);
  }
  isDisabled(e) {
    return this.state.disabledKeys.has(e) && this.state.disabledBehavior === "all";
  }
  isLink(e) {
    var t, l;
    return !!(!((l = this.collection.getItem(e)) === null || l === void 0 || (t = l.props) === null || t === void 0) && t.href);
  }
  constructor(e, t, l) {
    this.collection = e, this.state = t;
    var s;
    this.allowsCellSelection = (s = l == null ? void 0 : l.allowsCellSelection) !== null && s !== void 0 ? s : !1, this._isSelectAll = null;
  }
}
function ie(a) {
  let { collection: e, focusMode: t } = a, l = te(a), s = K(() => a.disabledKeys ? new Set(a.disabledKeys) : /* @__PURE__ */ new Set(), [
    a.disabledKeys
  ]), o = l.setFocusedKey;
  l.setFocusedKey = (n, c) => {
    if (t === "cell" && n != null) {
      let u = e.getItem(n);
      if ((u == null ? void 0 : u.type) === "item") {
        var d, i;
        let f = k(u, e);
        c === "last" ? n = (d = A(f)) === null || d === void 0 ? void 0 : d.key : n = (i = I(f)) === null || i === void 0 ? void 0 : i.key;
      }
    }
    o(n, c);
  };
  let r = K(() => new le(e, l), [
    e,
    l
  ]);
  const h = b(null);
  return D(() => {
    if (l.focusedKey != null && !e.getItem(l.focusedKey)) {
      const n = h.current.getItem(l.focusedKey), c = n.parentKey != null && (n.type === "cell" || n.type === "rowheader" || n.type === "column") ? h.current.getItem(n.parentKey) : n, d = h.current.rows, i = e.rows, u = d.length - i.length;
      let f = Math.min(u > 1 ? Math.max(c.index - u + 1, 0) : c.index, i.length - 1), y;
      for (; f >= 0; ) {
        if (!r.isDisabled(i[f].key) && i[f].type !== "headerrow") {
          y = i[f];
          break;
        }
        f < i.length - 1 ? f++ : (f > c.index && (f = c.index), f--);
      }
      if (y) {
        const w = y.hasChildNodes ? [
          ...k(y, e)
        ] : [], S = y.hasChildNodes && c !== n && n.index < w.length ? w[n.index].key : y.key;
        l.setFocusedKey(S);
      } else
        l.setFocusedKey(null);
    }
    h.current = e;
  }, [
    e,
    r,
    l,
    l.focusedKey
  ]), {
    collection: e,
    disabledKeys: s,
    isKeyboardNavigationDisabled: !1,
    selectionManager: r
  };
}
class se {
  *[Symbol.iterator]() {
    yield* [
      ...this.rows
    ];
  }
  get size() {
    return [
      ...this.rows
    ].length;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  getKeyBefore(e) {
    let t = this.keyMap.get(e);
    return t ? t.prevKey : null;
  }
  getKeyAfter(e) {
    let t = this.keyMap.get(e);
    return t ? t.nextKey : null;
  }
  getFirstKey() {
    var e;
    return (e = [
      ...this.rows
    ][0]) === null || e === void 0 ? void 0 : e.key;
  }
  getLastKey() {
    var e;
    let t = [
      ...this.rows
    ];
    return (e = t[t.length - 1]) === null || e === void 0 ? void 0 : e.key;
  }
  getItem(e) {
    return this.keyMap.get(e);
  }
  at(e) {
    const t = [
      ...this.getKeys()
    ];
    return this.getItem(t[e]);
  }
  getChildren(e) {
    let t = this.keyMap.get(e);
    return (t == null ? void 0 : t.childNodes) || [];
  }
  constructor(e) {
    this.keyMap = /* @__PURE__ */ new Map(), this.keyMap = /* @__PURE__ */ new Map(), this.columnCount = e == null ? void 0 : e.columnCount, this.rows = [];
    let t = (o) => {
      let r = this.keyMap.get(o.key);
      e.visitNode && (o = e.visitNode(o)), this.keyMap.set(o.key, o);
      let h = /* @__PURE__ */ new Set(), n;
      for (let c of o.childNodes)
        c.type === "cell" && c.parentKey == null && (c.parentKey = o.key), h.add(c.key), n ? (n.nextKey = c.key, c.prevKey = n.key) : c.prevKey = null, t(c), n = c;
      if (n && (n.nextKey = null), r)
        for (let c of r.childNodes)
          h.has(c.key) || l(c);
    }, l = (o) => {
      this.keyMap.delete(o.key);
      for (let r of o.childNodes)
        this.keyMap.get(r.key) === r && l(r);
    }, s;
    e.items.forEach((o, r) => {
      let h = {
        level: 0,
        key: "row-" + r,
        type: "row",
        value: void 0,
        hasChildNodes: !0,
        childNodes: [
          ...o.childNodes
        ],
        rendered: void 0,
        textValue: void 0,
        ...o
      };
      s ? (s.nextKey = h.key, h.prevKey = s.key) : h.prevKey = null, this.rows.push(h), t(h), s = h;
    }), s && (s.nextKey = null);
  }
}
const F = "row-header-column-" + Math.random().toString(36).slice(2);
let N = "row-header-column-" + Math.random().toString(36).slice(2);
for (; F === N; )
  N = "row-header-column-" + Math.random().toString(36).slice(2);
function oe(a, e) {
  if (e.length === 0)
    return [];
  let t = [], l = /* @__PURE__ */ new Map();
  for (let n of e) {
    let c = n.parentKey, d = [
      n
    ];
    for (; c; ) {
      let i = a.get(c);
      if (!i)
        break;
      if (l.has(i)) {
        i.colspan++;
        let { column: u, index: f } = l.get(i);
        if (f > d.length)
          break;
        for (let y = f; y < d.length; y++)
          u.splice(y, 0, null);
        for (let y = d.length; y < u.length; y++)
          u[y] && l.has(u[y]) && (l.get(u[y]).index = y);
      } else
        i.colspan = 1, d.push(i), l.set(i, {
          column: d,
          index: d.length - 1
        });
      c = i.parentKey;
    }
    t.push(d), n.index = t.length - 1;
  }
  let s = Math.max(...t.map((n) => n.length)), o = Array(s).fill(0).map(() => []), r = 0;
  for (let n of t) {
    let c = s - 1;
    for (let d of n) {
      if (d) {
        let i = o[c], u = i.reduce((f, y) => f + y.colspan, 0);
        if (u < r) {
          let f = {
            type: "placeholder",
            key: "placeholder-" + d.key,
            colspan: r - u,
            index: u,
            value: null,
            rendered: null,
            level: c,
            hasChildNodes: !1,
            childNodes: [],
            textValue: null
          };
          i.length > 0 && (i[i.length - 1].nextKey = f.key, f.prevKey = i[i.length - 1].key), i.push(f);
        }
        i.length > 0 && (i[i.length - 1].nextKey = d.key, d.prevKey = i[i.length - 1].key), d.level = c, d.colIndex = r, i.push(d);
      }
      c--;
    }
    r++;
  }
  let h = 0;
  for (let n of o) {
    let c = n.reduce((d, i) => d + i.colspan, 0);
    if (c < e.length) {
      let d = {
        type: "placeholder",
        key: "placeholder-" + n[n.length - 1].key,
        colspan: e.length - c,
        index: c,
        value: null,
        rendered: null,
        level: h,
        hasChildNodes: !1,
        childNodes: [],
        textValue: null,
        prevKey: n[n.length - 1].key
      };
      n.push(d);
    }
    h++;
  }
  return o.map((n, c) => ({
    type: "headerrow",
    key: "headerrow-" + c,
    index: c,
    value: null,
    rendered: null,
    level: 0,
    hasChildNodes: !0,
    childNodes: n,
    textValue: null
  }));
}
class ne extends se {
  *[Symbol.iterator]() {
    yield* this.body.childNodes;
  }
  get size() {
    return this._size;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  getKeyBefore(e) {
    let t = this.keyMap.get(e);
    return t ? t.prevKey : null;
  }
  getKeyAfter(e) {
    let t = this.keyMap.get(e);
    return t ? t.nextKey : null;
  }
  getFirstKey() {
    var e;
    return (e = I(this.body.childNodes)) === null || e === void 0 ? void 0 : e.key;
  }
  getLastKey() {
    var e;
    return (e = A(this.body.childNodes)) === null || e === void 0 ? void 0 : e.key;
  }
  getItem(e) {
    return this.keyMap.get(e);
  }
  at(e) {
    const t = [
      ...this.getKeys()
    ];
    return this.getItem(t[e]);
  }
  getTextValue(e) {
    let t = this.getItem(e);
    if (!t)
      return "";
    if (t.textValue)
      return t.textValue;
    let l = this.rowHeaderColumnKeys;
    if (l) {
      let s = [];
      for (let o of t.childNodes) {
        let r = this.columns[o.index];
        if (l.has(r.key) && o.textValue && s.push(o.textValue), s.length === l.size)
          break;
      }
      return s.join(" ");
    }
    return "";
  }
  constructor(e, t, l) {
    let s = /* @__PURE__ */ new Set(), o, r = [];
    if (l != null && l.showSelectionCheckboxes) {
      let i = {
        type: "column",
        key: F,
        value: null,
        textValue: "",
        level: 0,
        index: l != null && l.showDragButtons ? 1 : 0,
        hasChildNodes: !1,
        rendered: null,
        childNodes: [],
        props: {
          isSelectionCell: !0
        }
      };
      r.unshift(i);
    }
    if (l != null && l.showDragButtons) {
      let i = {
        type: "column",
        key: N,
        value: null,
        textValue: "",
        level: 0,
        index: 0,
        hasChildNodes: !1,
        rendered: null,
        childNodes: [],
        props: {
          isDragButtonCell: !0
        }
      };
      r.unshift(i);
    }
    let h = [], n = /* @__PURE__ */ new Map(), c = (i) => {
      switch (i.type) {
        case "body":
          o = i;
          break;
        case "column":
          n.set(i.key, i), i.hasChildNodes || (r.push(i), i.props.isRowHeader && s.add(i.key));
          break;
        case "item":
          h.push(i);
          return;
      }
      for (let u of i.childNodes)
        c(u);
    };
    for (let i of e)
      c(i);
    let d = oe(n, r);
    d.forEach((i, u) => h.splice(u, 0, i)), super({
      columnCount: r.length,
      items: h,
      visitNode: (i) => (i.column = r[i.index], i)
    }), this._size = 0, this.columns = r, this.rowHeaderColumnKeys = s, this.body = o, this.headerRows = d, this._size = [
      ...o.childNodes
    ].length, this.rowHeaderColumnKeys.size === 0 && this.rowHeaderColumnKeys.add(this.columns.find((i) => {
      var u, f;
      return !(!((u = i.props) === null || u === void 0) && u.isDragButtonCell) && !(!((f = i.props) === null || f === void 0) && f.isSelectionCell);
    }).key);
  }
}
const re = {
  ascending: "descending",
  descending: "ascending"
};
function ce(a) {
  let [e, t] = $(!1), { selectionMode: l = "none", showSelectionCheckboxes: s, showDragButtons: o } = a, r = K(() => ({
    showSelectionCheckboxes: s && l !== "none",
    showDragButtons: o,
    selectionMode: l,
    columns: []
  }), [
    a.children,
    s,
    l,
    o
  ]), h = Q(a, O((d) => new ne(d, null, r), [
    r
  ]), r), { disabledKeys: n, selectionManager: c } = ie({
    ...a,
    collection: h,
    disabledBehavior: a.disabledBehavior || "selection"
  });
  return {
    collection: h,
    disabledKeys: n,
    selectionManager: c,
    showSelectionCheckboxes: a.showSelectionCheckboxes || !1,
    sortDescriptor: a.sortDescriptor,
    isKeyboardNavigationDisabled: h.size === 0 || e,
    setKeyboardNavigationDisabled: t,
    sort(d, i) {
      var u;
      a.onSortChange({
        column: d,
        direction: i ?? (((u = a.sortDescriptor) === null || u === void 0 ? void 0 : u.column) === d ? re[a.sortDescriptor.direction] : "ascending")
      });
    }
  };
}
function T(a) {
  return null;
}
T.getCollectionNode = function* (e, t) {
  let { children: l, columns: s } = e;
  if (t.columns = [], typeof l == "function") {
    if (!s)
      throw new Error("props.children was a function but props.columns is missing");
    for (let o of s)
      yield {
        type: "column",
        value: o,
        renderer: l
      };
  } else {
    let o = [];
    v.Children.forEach(l, (r) => {
      o.push({
        type: "column",
        element: r
      });
    }), yield* o;
  }
};
let ae = T;
function V(a) {
  return null;
}
V.getCollectionNode = function* (e) {
  let { children: t, items: l } = e;
  yield {
    type: "body",
    hasChildNodes: !0,
    props: e,
    *childNodes() {
      if (typeof t == "function") {
        if (!l)
          throw new Error("props.children was a function but props.items is missing");
        for (let s of l)
          yield {
            type: "item",
            value: s,
            renderer: t
          };
      } else {
        let s = [];
        v.Children.forEach(t, (o) => {
          s.push({
            type: "item",
            element: o
          });
        }), yield* s;
      }
    }
  };
};
let de = V;
function z(a) {
  return null;
}
z.getCollectionNode = function* (e, t) {
  let { title: l, children: s, childColumns: o } = e, r = l || s, h = e.textValue || (typeof r == "string" ? r : "") || e["aria-label"], n = yield {
    type: "column",
    hasChildNodes: !!o || l && v.Children.count(s) > 0,
    rendered: r,
    textValue: h,
    props: e,
    *childNodes() {
      if (o)
        for (let d of o)
          yield {
            type: "column",
            value: d
          };
      else if (l) {
        let d = [];
        v.Children.forEach(s, (i) => {
          d.push({
            type: "column",
            element: i
          });
        }), yield* d;
      }
    },
    shouldInvalidate(d) {
      return c(d), !1;
    }
  }, c = (d) => {
    for (let i of n)
      i.hasChildNodes || d.columns.push(i);
  };
  c(t);
};
let he = z;
function M(a) {
  return null;
}
M.getCollectionNode = function* (e, t) {
  let { children: l, textValue: s, UNSTABLE_childItems: o } = e;
  yield {
    type: "item",
    props: e,
    textValue: s,
    "aria-label": e["aria-label"],
    hasChildNodes: !0,
    *childNodes() {
      if (t.showDragButtons && (yield {
        type: "cell",
        key: "header-drag",
        props: {
          isDragButtonCell: !0
        }
      }), t.showSelectionCheckboxes && t.selectionMode !== "none" && (yield {
        type: "cell",
        key: "header",
        props: {
          isSelectionCell: !0
        }
      }), typeof l == "function") {
        for (let r of t.columns)
          yield {
            type: "cell",
            element: l(r.key),
            key: r.key
            // this is combined with the row key by CollectionBuilder
          };
        if (o)
          for (let r of o)
            yield {
              type: "item",
              value: r
            };
      } else {
        let r = [], h = [];
        if (v.Children.forEach(l, (n) => {
          if (n.type === M) {
            if (r.length < t.columns.length)
              throw new Error("All of a Row's child Cells must be positioned before any child Rows.");
            h.push({
              type: "item",
              element: n
            });
          } else
            r.push({
              type: "cell",
              element: n
            });
        }), r.length !== t.columns.length)
          throw new Error(`Cell count must match column count. Found ${r.length} cells and ${t.columns.length} columns.`);
        yield* r, yield* h;
      }
    },
    shouldInvalidate(r) {
      return r.columns.length !== t.columns.length || r.columns.some((h, n) => h.key !== t.columns[n].key) || r.showSelectionCheckboxes !== t.showSelectionCheckboxes || r.showDragButtons !== t.showDragButtons || r.selectionMode !== t.selectionMode;
    }
  };
};
let ue = M;
function H(a) {
  return null;
}
H.getCollectionNode = function* (e) {
  let { children: t } = e, l = e.textValue || (typeof t == "string" ? t : "") || e["aria-label"] || "";
  yield {
    type: "cell",
    props: e,
    rendered: t,
    textValue: l,
    "aria-label": e["aria-label"],
    hasChildNodes: !1
  };
};
let fe = H;
const ye = P(
  (a, e) => {
    const t = J(e), { selectionMode: l, selectionBehavior: s } = a, o = ce({
      ...a,
      showSelectionCheckboxes: l === "multiple" && s !== "replace"
    }), { collection: r } = o, { gridProps: h } = X(a, o, t);
    return /* @__PURE__ */ R("table", { ...h, ref: t, className: "custom-table", children: [
      /* @__PURE__ */ g(_, { type: "thead", children: r.headerRows.map((n) => /* @__PURE__ */ g(G, { item: n, state: o, children: [...n.childNodes].map(
        (c) => c.props.isSelectionCell ? /* @__PURE__ */ g(
          j,
          {
            column: c,
            state: o
          },
          c.key
        ) : /* @__PURE__ */ g(
          W,
          {
            column: c,
            state: o
          },
          c.key
        )
      ) }, n.key)) }),
      /* @__PURE__ */ g(_, { type: "tbody", children: [...r.body.childNodes].map((n) => /* @__PURE__ */ g(Y, { item: n, state: o, children: [...n.childNodes].map(
        (c) => c.props.isSelectionCell ? /* @__PURE__ */ g(U, { cell: c, state: o }, c.key) : /* @__PURE__ */ g(q, { cell: c, state: o }, c.key)
      ) }, n.key)) })
    ] });
  }
);
function $e({ columns: a, rows: e, mode: t = "none" }) {
  return /* @__PURE__ */ g("div", { className: "safearea-table", children: /* @__PURE__ */ R(ye, { "aria-label": "Tabela", selectionMode: t, children: [
    /* @__PURE__ */ g(ae, { children: a.map((l) => /* @__PURE__ */ g(he, { children: l.elem }, l.key)) }),
    /* @__PURE__ */ g(de, { children: e.map(({ key: l, items: s }) => /* @__PURE__ */ g(ue, { children: s.map((o) => /* @__PURE__ */ g(fe, { children: o.elem }, o.key)) }, l)) })
  ] }) });
}
export {
  ye as CustomTable,
  $e as Table
};
