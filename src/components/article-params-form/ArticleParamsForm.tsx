import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { useState } from 'react';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {

	const [sidebarIsOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		// Вызов функции для изменения состояния
		setIsSidebarOpen(!sidebarIsOpen);
	}

	return (
		<>
			<ArrowButton onClick={toggleSidebar} />
			<aside className={`${styles.container} ${sidebarIsOpen ? styles.container_open : ''}`}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
