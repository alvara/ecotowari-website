import type {NextApiRequest, NextApiResponse} from 'next'
import {airtableClient} from '../../../lib/airtable'
import {ISticker} from '../../../services/type'

const data: ISticker[] = []

airtableClient('Stickers')
  .select({
    view: 'Grid view',
  })
  .eachPage(
    function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.

      records.forEach(function ({fields}) {
        data.push({
          id: fields.Id as number,
          qty: (fields.Quantity as number) || 0,
          created: new Date(fields.Created as string),
          notes: (fields.Notes as string) || '',
        })
      })

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage()
    },
    function done(err) {
      if (err) {
        console.error(err)
      }
    }
  )

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database
  res.status(200).json(data)
}
