import styles from "@/shared/components/button/Button.module.css";

function Button({ text, type = "button", onClick, ...rest }) {
	const email = "chelsea_brooks@outlook.com";

	if (onClick) {
		return (
			<button
				type={type}
				className={styles.button}
				onClick={onClick}
				{...rest}
			>
				{text}
			</button>
		);
	}

	return (
		<a className={styles.button} href={`mailto:${email}`} {...rest}>
			{text}
			<span aria-hidden="true">↗</span>
		</a>
	);
}

export default Button;
