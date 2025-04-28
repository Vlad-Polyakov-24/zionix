import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { Game } from '@widgets/Game';
import styles from './SectionIntro.module.scss';

type SectionIntroProps = {
	className?: string;
};

const SectionIntro = ({ className }: SectionIntroProps) => (
	<section className={classNames(styles.intro, {}, [className])}>
		<Container>
			<Game />
		</Container>
	</section>
);

export { SectionIntro };