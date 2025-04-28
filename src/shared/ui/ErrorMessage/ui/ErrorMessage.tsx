import { classNames } from '@shared/lib/classNames';
import { MessageAlign } from '../model/types/ErrorMessage.types';
import styles from './ErrorMessage.module.scss';

type ErrorMessageProps = {
	className?: string;
	message: string;
	align?: MessageAlign;
};

const ErrorMessage = ({ className, message, align = MessageAlign.LEFT }: ErrorMessageProps) => (
	<span className={classNames(styles.message, {}, [className, styles[align]])}>{message}</span>
);

export default ErrorMessage;