import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { useState } from 'react';

import styles from './ArticleParamsForm.module.scss';
import { Select } from '../select';
import { RadioGroup } from '../radio-group'
import { fontFamilyOptions, fontColors, backgroundColors, contentWidthArr, fontSizeOptions, defaultArticleState, ArticleStateType } from 'src/constants/articleProps';


interface propsArticleParamsForm {
	onChange?: (data: ArticleStateType) => void;
}

export const ArticleParamsForm = ({ onChange }: propsArticleParamsForm) => {

	const [sidebarIsOpen, setIsSidebarOpen] = useState(true);
	const [selectedFont, setSelectedFont] = useState(defaultArticleState.fontFamilyOption);
	const [selectedFontSize, setSelectedFontSize] = useState(defaultArticleState.fontSizeOption);
	const [selectedFontColor, setSelectedColor] = useState(defaultArticleState.fontColor);
	const [selectedBackgroundColor, setSelectedBackgroundColor] = useState(defaultArticleState.backgroundColor);
	const [selectedWidthContent, setSelectedWidthContent] = useState(defaultArticleState.contentWidth);

	const toggleSidebar = () => {
		// Вызов функции для изменения состояния
		setIsSidebarOpen(!sidebarIsOpen);
	}

	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log('вонь формы, чуешь?');
		if (onChange) {
			onChange({
				fontFamilyOption: selectedFont,
				fontColor: selectedFontColor,
				backgroundColor: selectedBackgroundColor,
				contentWidth: selectedWidthContent,
				fontSizeOption: selectedFontSize,
			})
		}
	}

	const resetHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log('нажали сбросить');
		if (onChange) {
			onChange(defaultArticleState)
		}
	}

	return (
		<>
			<ArrowButton onClick={toggleSidebar} />
			<aside className={`${styles.container} ${sidebarIsOpen ? styles.container_open : ''}`}>

				<form className={styles.form} onSubmit={submitHandler} onReset={resetHandler} >

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
