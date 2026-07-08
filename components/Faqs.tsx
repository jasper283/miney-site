import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'What is Miney?',
      answer:
        'Miney is a personal finance and expense tracker app that helps you track expenses, income, budgets, assets, and account balances in one simple place.',
    },
    {
      question: 'What can I track with Miney?',
      answer:
        'You can track expenses, income, transfers, budgets, assets, debts, credit cards, and account balances. Miney is designed to give you a complete view of your personal finances.',
    },
    {
      question: 'Is Miney a free expense tracker?',
      answer:
        'Yes. Miney includes a free plan with expense tracking, budgets, assets, cloud sync, basic data export, and many everyday features. You can upgrade to Miney Pro anytime for advanced capabilities.',
    },
  ],
  [
    {
      question: 'Does Miney support budgets?',
      answer:
        'Yes. You can create flexible budgets with custom periods, category groups, rollover balances, and detailed budget history to better control your spending.',
    },
    {
      question: 'Does Miney support multiple currencies?',
      answer:
        'Yes. Miney supports over 166 currencies with automatic exchange rates, making it ideal for travel, international spending, and multi-currency budgeting.',
    },
    {
      question: 'Can I track assets and credit cards?',
      answer:
        'Yes. Miney lets you manage cash, bank accounts, savings, investments, and credit cards, including billing dates and payment reminders.',
    },
  ],
  [
    {
      question: 'Can I sync my data across devices?',
      answer:
        'Yes. Your transactions, budgets, and accounts can be securely synced across your devices, so your data is always up to date.',
    },
    {
      question: 'Can I export my expense data?',
      answer:
        'Yes. Miney Pro supports exporting your financial records, making it easy to back up your data or analyze it in spreadsheet software.',
    },
    // {
    //   question: 'What does Miney Pro include?',
    //   answer:
    //     'Miney Pro adds advanced expense tracking features, including multiple books, support for over 166 currencies, flexible budgeting, receipt photos, refunds, advanced CSV export filters, and detailed transaction tracking with discounts and taxes.'
    // },
    {
      question: 'Is Miney available on Android?',
      answer:
        'Miney is currently available for iPhone on the App Store. The Android version is in final testing and will be released on Google Play soon.'
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:support@miney.app"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg/6 font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
