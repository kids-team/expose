import { AlignmentControl, BlockControls } from '@wordpress/block-editor';

import { Popover, ToolbarButton } from '@wordpress/components';

import { useRef, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { link, pullLeft, pullRight, seen, unseen } from '@wordpress/icons';
import type { CartBlockAttributes, EditorProps } from '../types';
import * as blockEditor from '@wordpress/block-editor';

type LinkControlValue = {
	url?: string;
	opensInNewTab?: boolean;
	noFollow?: boolean;
};

const Toolbar = ( props: EditorProps<CartBlockAttributes> ) => {
	const [ isEditingURL, setIsEditingURL ] = useState( false );
	const richTextRef = useRef<HTMLButtonElement | null>( null );
	const LinkControl = ( blockEditor as Record<string, unknown> )[ '__experimentalLinkControl' ] as ( (
		props: Record<string, unknown>
	) => JSX.Element ) | undefined;

	const {
		attributes: { url, newTab, rel, iconRight, iconOnly, icon },
		setAttributes,
	} = props;

	return (
		<>
			<BlockControls group="block">
				<AlignmentControl
					value={ iconRight ? 'right' : 'left' }
					onChange={ ( event ) => {
						setAttributes({
							iconRight: event === 'right',
						});
					} }
					alignmentControls={[
						{
							icon: pullLeft,
							title: __( 'Align icon left', 'expose' ),
							align: 'left',
						},
						{
							icon: pullRight,
							title: __( 'Align icon right', 'expose' ),
							align: 'right',
						},
					]}
					label={ __( 'Icon alignment', 'expose' ) }
				/>

				<ToolbarButton
					icon={ link }
					title={ __( 'Link', 'expose' ) }
					onClick={ () => setIsEditingURL( true ) }
				/>

				{ icon && (
					<ToolbarButton
						icon={ iconOnly ? unseen : seen }
						title={ __( 'Hide text', 'expose' ) }
						isActive={ iconOnly }
						onClick={ () => setAttributes( { iconOnly: ! iconOnly } ) }
					/>
				) }
			</BlockControls>
				{ isEditingURL && LinkControl ? (
					<Popover
					placement="bottom"
					onClose={ () => {
						setIsEditingURL( false );
						richTextRef.current?.focus();
					} }
					focusOnMount={ isEditingURL ? 'firstElement' : false }
					__unstableSlotName="__unstable-block-tools-after"
					shift
				>
					<LinkControl
						value={ { url, opensInNewTab: newTab } }
						onChange={ ( linkObject: LinkControlValue ) =>
							setAttributes({
								rel,
								url: linkObject.url,
								newTab: linkObject.opensInNewTab,
								nofollow: linkObject.noFollow,
							})
						}
						onRemove={ () => {
							setAttributes({
								url: '',
								newTab: false,
								nofollow: false,
							});
						} }
						forceIsEditingLink={ isEditingURL }
						/>
					</Popover>
				) : null }
			</>
		);
	};

export default Toolbar;
