import reporter from "gatsby-cli/lib/reporter"
import { createSchemaCustomization } from "../utils/create-schema-customization"
import { IBuildContext } from "./"

export async function customizeSchema({
  parentSpan,
  refresh, // webhookBody,//coming soon
}: Partial<IBuildContext>): Promise<void> {
  const activity = reporter.activityTimer(`createSchemaCustomization`, {
    parentSpan,
  })
  activity.start()
  await createSchemaCustomization({
    parentSpan,
    refresh,
    // webhookBody,
  })
  activity.end()
}
