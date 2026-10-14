/* @ds-bundle: {"format":4,"namespace":"IpeBook","components":[{"name":"Button"},{"name":"Fab"},{"name":"TextField"},{"name":"SearchField"},{"name":"Chip"},{"name":"Switch"},{"name":"Radio"},{"name":"TopAppBar"},{"name":"NavigationBar"},{"name":"Tabs"},{"name":"StepIndicator"},{"name":"Tag"},{"name":"Avatar"},{"name":"BookCover"},{"name":"BookRow"},{"name":"ListItem"},{"name":"InfoCard"},{"name":"Badge"},{"name":"Snackbar"},{"name":"Dialog"},{"name":"EmptyState"},{"name":"MessageBubble"},{"name":"Logo"}]} */
(function () {
  var R = window.React, h = R.createElement;
  function cx() { return Array.prototype.slice.call(arguments).filter(Boolean).join(' '); }
  var P = {
    search: 'M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z',
    close: 'm256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z',
    check: 'M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z',
    done_all: 'M268-240 42-466l57-56 170 170 56 56-57 56Zm226 0L268-466l56-57 170 170 368-368 56 57-424 424Zm0-226-57-56 198-198 57 56-198 198Z',
    error: 'M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z',
    arrow_back: 'm313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z',
    chevron_right: 'M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z',
    home: 'M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z',
    add: 'M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z',
    person: 'M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z',
    chat: 'M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z',
    info: 'M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z'
  };
  function Icon(p) {
    var size = p.size || 24;
    if (p.name === 'shelf') {
      return h('svg', { className: cx('ipb-icon', p.className), width: size, height: size, viewBox: '0 0 24 24', 'aria-hidden': 'true', fill: 'currentColor' },
        h('rect', { x: 4, y: 4, width: 3, height: 14, rx: 1 }), h('rect', { x: 9, y: 6, width: 3, height: 12, rx: 1 }),
        h('rect', { x: 14, y: 5, width: 3, height: 13, rx: 1, transform: 'rotate(-12 15.5 11.5)' }), h('rect', { x: 3, y: 19, width: 18, height: 2, rx: 1 }));
    }
    return h('svg', { className: cx('ipb-icon', p.className), width: size, height: size, viewBox: '0 -960 960 960', 'aria-hidden': 'true', fill: 'currentColor' }, h('path', { d: P[p.name] || P.info }));
  }

  function Button(p) {
    var variant = p.variant || 'filled';
    return h('button', { type: p.type || 'button', className: cx('ipb-btn', 'ipb-btn--' + variant, p.block && 'ipb-btn--block', p.className), disabled: p.disabled, onClick: p.onClick, 'aria-label': p['aria-label'] },
      p.icon ? h(Icon, { name: p.icon, size: 18 }) : null, h('span', null, p.children));
  }
  function Fab(p) {
    return h('button', { type: 'button', className: 'ipb-fab', onClick: p.onClick }, h(Icon, { name: p.icon || 'add' }), h('span', null, p.children || 'Anunciar livro'));
  }
  var uid = 0;
  function useId(prefix) { var r = R.useRef(null); if (!r.current) r.current = prefix + (++uid); return r.current; }
  function TextField(p) {
    var id = useId('ipb-tf-'); var err = p.error;
    return h('div', { className: cx('ipb-field', err && 'ipb-field--error', p.disabled && 'ipb-field--disabled') },
      h('div', { className: 'ipb-field__box' },
        h('label', { htmlFor: id, className: 'ipb-field__label' }, p.label),
        h('input', { id: id, className: 'ipb-field__input', defaultValue: p.value, placeholder: p.placeholder, disabled: p.disabled, type: p.type || 'text', 'aria-invalid': err ? 'true' : undefined, 'aria-describedby': err ? id + '-msg' : undefined })),
      err ? h('p', { id: id + '-msg', className: 'ipb-field__msg' }, h(Icon, { name: 'error', size: 16 }), err) : (p.hint ? h('p', { className: 'ipb-field__hint' }, p.hint) : null));
  }
  function SearchField(p) {
    var st = R.useState(p.value || ''), v = st[0], set = st[1];
    return h('div', { className: 'ipb-search', role: 'search' },
      h(Icon, { name: 'search' }),
      h('input', { className: 'ipb-search__input', 'aria-label': p.label || 'Buscar livros', placeholder: p.placeholder || 'Buscar título, autor ou ISBN', value: v, onChange: function (e) { set(e.target.value); } }),
      v ? h('button', { type: 'button', className: 'ipb-iconbtn', 'aria-label': 'Limpar busca', onClick: function () { set(''); } }, h(Icon, { name: 'close' })) : null);
  }
  function Chip(p) {
    return h('button', { type: 'button', className: cx('ipb-chip', p.selected && 'ipb-chip--on'), 'aria-pressed': p.selected ? 'true' : 'false', disabled: p.disabled, onClick: p.onClick },
      p.selected ? h(Icon, { name: 'check', size: 18 }) : null, p.children);
  }
  function Switch(p) {
    var st = R.useState(!!p.checked), on = st[0], set = st[1];
    return h('label', { className: 'ipb-switchrow' }, h('span', null, p.label),
      h('button', { type: 'button', role: 'switch', 'aria-checked': on ? 'true' : 'false', 'aria-label': p.label, className: cx('ipb-switch', on && 'ipb-switch--on'), onClick: function () { set(!on); } }, h('span', { className: 'ipb-switch__thumb' }, on ? h(Icon, { name: 'check', size: 16 }) : null)));
  }
  function Radio(p) {
    return h('label', { className: 'ipb-radio' }, h('input', { type: 'radio', name: p.name, defaultChecked: p.checked, value: p.value }), h('span', { className: 'ipb-radio__dot', 'aria-hidden': 'true' }), h('span', null, p.label));
  }
  function TopAppBar(p) {
    return h('header', { className: 'ipb-topbar' },
      p.onBack !== false ? h('button', { type: 'button', className: 'ipb-iconbtn', 'aria-label': 'Voltar' }, h(Icon, { name: 'arrow_back' })) : null,
      h('h1', { className: 'ipb-topbar__title' }, p.title));
  }
  var DEST = [['inicio', 'Início', 'home'], ['explorar', 'Explorar', 'search'], ['estante', 'Estante', 'shelf'], ['conversas', 'Conversas', 'chat'], ['perfil', 'Perfil', 'person']];
  function NavigationBar(p) {
    var active = p.active || 'inicio';
    return h('nav', { className: 'ipb-nav', 'aria-label': 'Principal' }, DEST.map(function (d) {
      var on = d[0] === active, badge = p.badges && p.badges[d[0]];
      return h('a', { key: d[0], href: '#' + d[0], className: cx('ipb-nav__item', on && 'ipb-nav__item--on'), 'aria-current': on ? 'page' : undefined, 'aria-label': badge ? d[1] + ', ' + badge + ' não lidas' : undefined },
        h('span', { className: 'ipb-nav__pill' }, h(Icon, { name: d[2] }), badge ? h('span', { className: 'ipb-nav__badge' }, h(Badge, { count: badge })) : null),
        h('span', { className: 'ipb-nav__label' }, d[1]));
    }));
  }
  function Tabs(p) {
    var st = R.useState(p.active || 0), a = st[0], set = st[1];
    return h('div', { className: 'ipb-tabs', role: 'tablist' }, (p.items || ['Anúncios', 'Propostas', 'Concluídos']).map(function (t, i) {
      return h('button', { key: t, role: 'tab', type: 'button', 'aria-selected': i === a ? 'true' : 'false', className: cx('ipb-tab', i === a && 'ipb-tab--on'), onClick: function () { set(i); } }, t);
    }));
  }
  function StepIndicator(p) {
    var step = p.step || 1, total = p.total || 3, segs = [];
    for (var i = 1; i <= total; i++) segs.push(h('span', { key: i, className: cx('ipb-steps__seg', i <= step && 'ipb-steps__seg--on') }));
    return h('div', { className: 'ipb-steps' }, h('p', { className: 'ipb-steps__label' }, 'Etapa ' + step + ' de ' + total), h('div', { className: 'ipb-steps__bar', 'aria-hidden': 'true' }, segs));
  }
  var TAG = { venda: 'Venda', troca: 'Troca', doacao: 'Doação', reservado: 'Reservado', concluido: 'Concluído' };
  function Tag(p) { var k = p.kind || 'venda'; return h('span', { className: 'ipb-tag ipb-tag--' + k }, p.children || TAG[k]); }
  function Avatar(p) { return h('span', { className: cx('ipb-avatar', p.size === 'lg' && 'ipb-avatar--lg'), role: 'img', 'aria-label': p.name }, p.initials || (p.name || '?').split(' ').map(function (s) { return s[0]; }).slice(0, 2).join('')); }
  var COVER = { azul: 'cover-navy', marrom: 'cover-brown', verde: 'cover-forest', vinho: 'cover-wine', mostarda: 'cover-ochre' };
  function BookCover(p) {
    var size = p.size || 120, motif = p.motif || 'montanhas', col = COVER[p.color || 'azul'];
    var art;
    if (motif === 'ondas') art = h('path', { d: 'M8 112 q12 -10 24 0 t24 0 t24 0 t24 0 M8 124 q12 -10 24 0 t24 0 t24 0 t24 0', fill: 'none', stroke: 'var(--cover-on)', strokeWidth: 3, strokeLinecap: 'round' });
    else if (motif === 'estrelas') art = h('g', { fill: 'var(--cover-on)' }, h('circle', { cx: 24, cy: 100, r: 2 }), h('circle', { cx: 44, cy: 116, r: 1.6 }), h('circle', { cx: 70, cy: 104, r: 2.2 }), h('circle', { cx: 98, cy: 120, r: 1.6 }));
    else if (motif === 'ipe') art = h('g', { fill: 'var(--cover-sun)' }, h('circle', { cx: 40, cy: 108, r: 9 }), h('circle', { cx: 56, cy: 100, r: 7 }), h('circle', { cx: 70, cy: 112, r: 8 }), h('rect', { x: 52, y: 112, width: 3, height: 22, fill: 'var(--cover-on)' }));
    else art = h('path', { d: 'M0 132 L30 100 L52 118 L80 86 L120 132 Z', fill: 'var(--cover-on)', opacity: 0.85 });
    return h('figure', { className: 'ipb-cover', style: { width: size, height: size * 170 / 120 }, 'aria-label': 'Capa ilustrativa: ' + (p.title || 'Título do livro') },
      h('svg', { viewBox: '0 0 120 170', width: '100%', height: '100%', 'aria-hidden': 'true', preserveAspectRatio: 'none' },
        h('rect', { width: 120, height: 170, fill: 'var(--' + col + ')' }), h('rect', { width: 6, height: 170, fill: '#000', opacity: 0.18 }),
        h('circle', { cx: 92, cy: 62, r: 12, fill: 'var(--cover-sun)' }), art),
      size >= 80 ? h('figcaption', { className: 'ipb-cover__text' }, h('span', { className: 'ipb-cover__author' }, (p.author || 'Autor').toUpperCase()), h('span', { className: 'ipb-cover__title' }, p.title || 'Título do livro')) : null);
  }
  function BookRow(p) {
    return h('div', { className: 'ipb-bookrow' }, h(BookCover, { size: 44, color: p.color, motif: p.motif, title: p.title }),
      h('div', { className: 'ipb-bookrow__text' }, h('p', { className: 'ipb-bookrow__title' }, p.title), h('p', { className: 'ipb-bookrow__meta' }, p.meta), h(Tag, { kind: p.kind || 'venda' })),
      p.chevron ? h(Icon, { name: 'chevron_right', className: 'ipb-muted' }) : null);
  }
  function ListItem(p) {
    return h('a', { href: '#', className: 'ipb-listitem' }, p.icon ? h(Icon, { name: p.icon, className: 'ipb-muted' }) : null,
      h('span', { className: 'ipb-listitem__text' }, h('span', { className: 'ipb-listitem__title' }, p.title), p.support ? h('span', { className: 'ipb-listitem__support' }, p.support) : null),
      p.chevron !== false ? h(Icon, { name: 'chevron_right', className: 'ipb-muted' }) : null);
  }
  function InfoCard(p) { return h('div', { className: 'ipb-info' }, h(Icon, { name: p.icon || 'info' }), h('div', null, h('p', { className: 'ipb-info__title' }, p.title), h('p', { className: 'ipb-info__text' }, p.children))); }
  function Badge(p) { return p.count == null ? h('span', { className: 'ipb-badge ipb-badge--dot', 'aria-hidden': 'true' }) : h('span', { className: 'ipb-badge', 'aria-hidden': 'true' }, p.count > 99 ? '99+' : String(p.count)); }
  function Snackbar(p) { return h('div', { className: 'ipb-snack', role: 'status' }, h('span', null, p.children), p.action ? h('button', { type: 'button', className: 'ipb-snack__action' }, p.action) : null); }
  function Dialog(p) {
    var id = useId('ipb-dlg-');
    return h('div', { className: 'ipb-dialog', role: 'alertdialog', 'aria-modal': 'true', 'aria-labelledby': id, 'aria-describedby': id + '-d' },
      h('h2', { id: id, className: 'ipb-dialog__title' }, p.title),
      h('p', { id: id + '-d', className: 'ipb-dialog__text' }, p.children),
      h('div', { className: 'ipb-dialog__actions' }, h(Button, { variant: 'text' }, p.cancel || 'Cancelar'), h(Button, { variant: p.destructive ? 'danger' : 'text' }, p.confirm || 'Confirmar')));
  }
  function EmptyState(p) {
    return h('section', { className: 'ipb-empty' }, h('span', { className: 'ipb-empty__icon' }, h(Icon, { name: p.icon || 'shelf', size: 32 })),
      h('h2', { className: 'ipb-empty__title' }, p.title), h('p', { className: 'ipb-empty__text' }, p.children),
      p.action ? h(Button, { variant: 'outlined' }, p.action) : null);
  }
  function MessageBubble(p) {
    var mine = p.from === 'me', st = p.status;
    var label = (mine ? 'Você' : (p.author || 'Pessoa')) + ', ' + (p.time || '14:32') + (st === 'read' ? ', lida' : st === 'failed' ? ', não enviada' : '');
    return h('div', { className: cx('ipb-msg', mine ? 'ipb-msg--me' : 'ipb-msg--them'), 'aria-label': label },
      h('div', { className: 'ipb-msg__bubble' }, h('p', { className: 'ipb-msg__text' }, p.children),
        h('span', { className: 'ipb-msg__meta' }, p.time || '14:32',
          mine && st === 'delivered' ? h(Icon, { name: 'check', size: 16 }) : null,
          mine && st === 'read' ? h(Icon, { name: 'done_all', size: 16, className: 'ipb-msg__read' }) : null,
          mine && st === 'failed' ? h(Icon, { name: 'error', size: 16, className: 'ipb-msg__fail' }) : null)),
      mine && st === 'failed' ? h('p', { className: 'ipb-msg__retry' }, 'Não enviada · ', h('button', { type: 'button', className: 'ipb-link' }, 'Tentar de novo')) : null);
  }
  function Logo(p) { return h('span', { className: cx('ipb-logo', p.inverse && 'ipb-logo--inverse'), style: p.size ? { fontSize: p.size } : null }, 'IpêBook'); }

  window.IpeBook = Object.assign(window.IpeBook || {}, { Icon: Icon, Button: Button, Fab: Fab, TextField: TextField, SearchField: SearchField, Chip: Chip, Switch: Switch, Radio: Radio, TopAppBar: TopAppBar, NavigationBar: NavigationBar, Tabs: Tabs, StepIndicator: StepIndicator, Tag: Tag, Avatar: Avatar, BookCover: BookCover, BookRow: BookRow, ListItem: ListItem, InfoCard: InfoCard, Badge: Badge, Snackbar: Snackbar, Dialog: Dialog, EmptyState: EmptyState, MessageBubble: MessageBubble, Logo: Logo });
})();
