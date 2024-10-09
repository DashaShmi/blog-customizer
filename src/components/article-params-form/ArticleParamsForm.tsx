import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { useState } from 'react';

import styles from './ArticleParamsForm.module.scss';
import { Select } from '../select';
import { RadioGroup } from '../radio-group'
import { fontFamilyOptions, fontColors, backgroundColors, contentWidthArr, fontSizeOptions, defaultArticleState } from 'src/constants/articleProps';


interface propsArticleParamsForm {
	onChange?: () => void;
}

export const ArticleParamsForm = ({ onChange }: propsArticleParamsForm) => {

	const [sidebarIsOpen, setIsSidebarOpen] = useState(true);

	const toggleSidebar = () => {
		// Вызов функции для изменения состояния
		setIsSidebarOpen(!sidebarIsOpen);
	}
	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log('вонь формы, чуешь?');
		if (onChange) {
			onChange()
		}
	}

	const [selectedFont, setSelectedFont] = useState(defaultArticleState.fontFamilyOption);
	const [selectedFontSize, setSelectedFontSize] = useState(defaultArticleState.fontSizeOption);
	const [selectedFontColor, setSelectedColor] = useState(defaultArticleState.fontColor);
	const [selectedBackgroundColor, setSelectedBackgroundColor] = useState(defaultArticleState.backgroundColor);
	const [selectedWidthContent, setSelectedWidthContent] = useState(defaultArticleState.contentWidth);

	return (
		<>
			<ArrowButton onClick={toggleSidebar} />
			<aside className={`${styles.container} ${sidebarIsOpen ? styles.container_open : ''}`}>

				<form className={styles.form} onSubmit={submitHandler}>

					<Select
						selected={selectedFont}
						onChange={setSelectedFont}
						options={fontFamilyOptions}
						title='шрифт'
					/>

					<RadioGroup
						selected={selectedFontSize}
						name='radio'
						onChange={setSelectedFontSize}
						options={fontSizeOptions}
						title='размер шрифта'
					/>

					<Select
						selected={selectedFontColor}
						onChange={setSelectedColor}
						options={fontColors}
						title='цвет шрифта'
					/>


					<Select
						selected={selectedBackgroundColor}
						onChange={setSelectedBackgroundColor}
						options={backgroundColors}
						title='цвет фона'
					/>

					<Select
						selected={selectedWidthContent}
						onChange={setSelectedWidthContent}
						options={contentWidthArr}
						title='ширина контента'
					/>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
