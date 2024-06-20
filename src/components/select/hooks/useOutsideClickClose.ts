import { useEffect } from 'react';

type UseOutsideClickClose = {
	isOpen: boolean;
	onChange: (newValue: boolean) => void;
	onClose?: () => void;
	rootRef: React.RefObject<HTMLElement>;
};

export const useOutsideClickClose = ({
	isOpen,
	rootRef,
	onClose,
	onChange,
}: UseOutsideClickClose) => {
	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			const { target } = event;

			if (target instanceof Node && !rootRef.current?.contains(target)) {
				// Если сайдбар открыт, вызываем `onClose` и `onChange`
				if (isOpen) {
					onClose?.();
					onChange(false);
				}
			}
		};

		// Добавляем обработчик события клика
		window.addEventListener('mousedown', handleClick);

		// Удаляем event из функции очистки
		return () => {
			window.removeEventListener('mousedown', handleClick);
		};
	}, [isOpen, onClose, onChange, rootRef]);
};
