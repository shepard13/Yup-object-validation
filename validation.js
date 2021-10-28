export const validateSchema = Yup.object().shape({
	items: Yup.array().of(
		Yup.lazy((item) => {
			return Yup.object({
				itemName: Yup.string().test(
					'validate',
					'warning',
					(value) => {
						if (value && item.itemDescription) return true
						if (!value && !item.itemDescription) return true
						return false
					}
				),
				itemDescription: Yup.string().test(
					'validate',
					'warning',
					(value) => {
						if (value && item.itemName) return true
						if (!value && !item.itemName) return true
						return false
					}
				),
			})
		})
	),
})
