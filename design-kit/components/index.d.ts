import type * as React from 'react';
/** Botão em pílula para ações; uma ação Preenchida por tela. */
export interface ButtonProps { variant?: 'filled' | 'outlined' | 'text' | 'danger'; disabled?: boolean; icon?: string; block?: boolean; onClick?: () => void; children: React.ReactNode }
export declare function Button(props: ButtonProps): React.ReactElement;
/** Botão flutuante estendido para a ação principal da Estante: Anunciar livro. */
export interface FabProps { icon?: string; children?: React.ReactNode; onClick?: () => void }
export declare function Fab(props: FabProps): React.ReactElement;
/** Campo contornado com rótulo sempre visível, mensagem de ajuda e erro. */
export interface TextFieldProps { label: string; value?: string; placeholder?: string; hint?: string; error?: string; disabled?: boolean; type?: string }
export declare function TextField(props: TextFieldProps): React.ReactElement;
/** Campo de busca em pílula de 56 px para Início e Explorar (Android e Web). */
export interface SearchFieldProps { label?: string; placeholder?: string; value?: string }
export declare function SearchField(props: SearchFieldProps): React.ReactElement;
/** Chip de filtro de 32 px para modalidade, gênero e distância. */
export interface ChipProps { selected?: boolean; disabled?: boolean; onClick?: () => void; children: React.ReactNode }
export declare function Chip(props: ChipProps): React.ReactElement;
/** Chave para preferências que valem na hora, como notificações. */
export interface SwitchProps { label: string; checked?: boolean }
export declare function Switch(props: SwitchProps): React.ReactElement;
/** Botão de opção para escolha única em listas curtas. */
export interface RadioProps { name: string; value: string; label: string; checked?: boolean }
export declare function Radio(props: RadioProps): React.ReactElement;
/** Barra superior pequena de 64 px com voltar e o título da tela. */
export interface TopAppBarProps { title: string; onBack?: false | (() => void) }
export declare function TopAppBar(props: TopAppBarProps): React.ReactElement;
/** Barra de navegação inferior com os cinco destinos do app. */
export interface NavigationBarProps { active?: 'inicio' | 'explorar' | 'estante' | 'conversas' | 'perfil'; badges?: { [destino: string]: number } }
export declare function NavigationBar(props: NavigationBarProps): React.ReactElement;
/** Abas primárias para alternar conteúdo da mesma tela. */
export interface TabsProps { items?: string[]; active?: number }
export declare function Tabs(props: TabsProps): React.ReactElement;
/** Progresso do fluxo Anunciar em três etapas. */
export interface StepIndicatorProps { step: number; total?: number }
export declare function StepIndicator(props: StepIndicatorProps): React.ReactElement;
/** Etiqueta de modalidade e status do anúncio. */
export interface TagProps { kind?: 'venda' | 'troca' | 'doacao' | 'reservado' | 'concluido'; children?: React.ReactNode }
export declare function Tag(props: TagProps): React.ReactElement;
/** Avatar com iniciais em primary-container quando a pessoa não tem foto. */
export interface AvatarProps { name: string; initials?: string; size?: 'md' | 'lg' }
export declare function Avatar(props: AvatarProps): React.ReactElement;
/** Capa ilustrativa gerada quando o anúncio ainda não tem foto. */
export interface BookCoverProps { title?: string; author?: string; color?: 'azul' | 'marrom' | 'verde' | 'vinho' | 'mostarda'; motif?: 'montanhas' | 'ipe' | 'ondas' | 'estrelas'; size?: number }
export declare function BookCover(props: BookCoverProps): React.ReactElement;
/** Linha de livro com capa pequena, título, autor e bairro e a tag de modalidade. */
export interface BookRowProps { title: string; meta: string; kind?: 'venda' | 'troca' | 'doacao' | 'reservado' | 'concluido'; color?: string; motif?: string; chevron?: boolean }
export declare function BookRow(props: BookRowProps): React.ReactElement;
/** Linha de lista de 56 a 72 px com ícone, título, apoio e seta. */
export interface ListItemProps { title: string; support?: string; icon?: string; chevron?: boolean }
export declare function ListItem(props: ListItemProps): React.ReactElement;
/** Cartão de dica ou aviso com ícone, título e descrição em superfície tonal. */
export interface InfoCardProps { title: string; icon?: string; children: React.ReactNode }
export declare function InfoCard(props: InfoCardProps): React.ReactElement;
/** Indicador de novidade sobre um ícone de navegação. */
export interface BadgeProps { count?: number }
export declare function Badge(props: BadgeProps): React.ReactElement;
/** Aviso curto em inverse-surface com no máximo uma ação. */
export interface SnackbarProps { action?: string; children: React.ReactNode }
export declare function Snackbar(props: SnackbarProps): React.ReactElement;
/** Diálogo do Material 3 para confirmar ações que não dá para desfazer ou que avisam outra pessoa. */
export interface DialogProps { title: string; children: React.ReactNode; confirm?: string; cancel?: string; destructive?: boolean }
export declare function Dialog(props: DialogProps): React.ReactElement;
/** Estado vazio que ocupa o lugar da lista quando não há conteúdo. */
export interface EmptyStateProps { title: string; children: React.ReactNode; action?: string; icon?: string }
export declare function EmptyState(props: EmptyStateProps): React.ReactElement;
/** Bolha da conversa com estado de envio. */
export interface MessageBubbleProps { from: 'me' | 'them'; status?: 'delivered' | 'read' | 'failed'; time?: string; author?: string; children: React.ReactNode }
export declare function MessageBubble(props: MessageBubbleProps): React.ReactElement;
/** Logotipo IpêBook: o nome em Source Serif 4 Bold. */
export interface LogoProps { inverse?: boolean; size?: number }
export declare function Logo(props: LogoProps): React.ReactElement;
export interface IconProps { name: 'search' | 'close' | 'check' | 'done_all' | 'error' | 'arrow_back' | 'chevron_right' | 'home' | 'add' | 'person' | 'chat' | 'info' | 'shelf'; size?: number; className?: string }
export declare function Icon(props: IconProps): React.ReactElement;
declare global { interface Window { IpeBook: { Button: typeof Button; Fab: typeof Fab; TextField: typeof TextField; SearchField: typeof SearchField; Chip: typeof Chip; Switch: typeof Switch; Radio: typeof Radio; TopAppBar: typeof TopAppBar; NavigationBar: typeof NavigationBar; Tabs: typeof Tabs; StepIndicator: typeof StepIndicator; Tag: typeof Tag; Avatar: typeof Avatar; BookCover: typeof BookCover; BookRow: typeof BookRow; ListItem: typeof ListItem; InfoCard: typeof InfoCard; Badge: typeof Badge; Snackbar: typeof Snackbar; Dialog: typeof Dialog; EmptyState: typeof EmptyState; MessageBubble: typeof MessageBubble; Logo: typeof Logo; Icon: typeof Icon } } }
