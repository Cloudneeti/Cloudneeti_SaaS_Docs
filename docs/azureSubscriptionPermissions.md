The generated Service Principal needs to be granted a Reader role. Description of possible permissions is available [here.](https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#reader)

| Built-in-role     |  Description    | Explicit granting of permission required? |
| --------|---------|-------|
| Reader  | Let’s Cloudneeti list Azure Resources, read configuration meta-data for each of the resources, but not make any changes. At no time, Cloudneeti will be able to read/view data stored within the application/databases.   | Yes    |
