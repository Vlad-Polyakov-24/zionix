import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import styles from './SectionIntro.module.scss';

type SectionIntroProps = {
	className?: string;
};

const SectionIntro = ({ className }: SectionIntroProps) => {

	return (
		<section className={classNames(styles.intro, {}, [className])}>
			<Container>
				<h1 className={styles.intro__title}>title</h1>
			</Container>
		</section>
	);
};

export { SectionIntro };