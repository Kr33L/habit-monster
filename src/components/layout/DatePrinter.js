import { parseISO, format, addDays, isValid } from 'date-fns'

export default function DatePrinter({
	type = 'today',
	formatString = 'EEEE do MMMM'
}) {
	let date

	switch (type) {
		case 'yesterday':
			date = addDays(new Date(), -1)
			break
		case 'today':
			date = new Date()
			break
		case 'tomorrow':
			date = addDays(new Date(), 1)
			break
		default:
			date = parseISO(type)
	}

	const isValidDate = isValid(date)
	if (!isValidDate) {
		return <span>Date not valid!</span>
	}

	return (
		<span>
			<time dateTime={date.toISOString()}>{format(date, formatString)}</time>
		</span>
	)
}
