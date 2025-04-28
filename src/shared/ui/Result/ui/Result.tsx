import { classNames } from '@shared/lib/classNames';
import styles from './Result.module.scss';

type ResultProps = {
	className?: string;
	result?: number | string | null;
};

const Result = ({ className, result }: ResultProps) => (
	<div className={classNames(styles.result, {}, [className])}>
		{result && <span className={styles.result__number}>{result}</span>}
	</div>
);

export default Result;