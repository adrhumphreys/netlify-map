const config: any = {
  cms_manual_init: true,
  backend: {
    name: "git-gateway",
    branch: "main",
  },
  media_folder: "content/images",
  // local_backend: true,
  public_folder: "public",
  collections: [
    {
      name: "pages",
      label: "Pages",
      files: [
        {
          label: "Home",
          name: "home",
          file: "content/pages/home.md",
          fields: [
            {
              label: "Hero Title",
              name: "hero_title",
              widget: "string",
            },
            {
              label: "Hero Description",
              name: "hero_description",
              widget: "markdown",
            },
            {
              name: "test_widget",
              label: "Test Widget",
              widget: "test",
            },
          ],
        },
      ],
    },
    {
      label: "Locations",
      label_singular: "Location",
      name: "locations",
      folder: "content/locations",
      create: true,
      extension: "json",
      fields: [
        {
          label: "Title",
          name: "title",
          widget: "string",
        },
        {
          label: "Neighbourhood",
          name: "neighbourhood",
          widget: "string",
        },
        {
          label: "Address",
          name: "address",
          widget: "string",
        },
        {
          label: "Significance",
          name: "significance",
          widget: "relation",
          multiple: false,
          collection: "settings",
          file: "filter_sets_file",
          value_field: "filter_sets.*.filters.*.id",
          search_fields: ["filter_sets.*.filters.*.title"],
          display_fields: [
            "filter_sets.*.name",
            "filter_sets.*.filters.*.title",
          ],
        },
        {
          label: "Categories",
          name: "categories",
          widget: "relation",
          multiple: true,
          collection: "settings",
          file: "filter_sets_file",
          value_field: "filter_sets.*.filters.*.id",
          search_fields: ["filter_sets.*.filters.*.title"],
          display_fields: [
            "filter_sets.*.name",
            "filter_sets.*.filters.*.title",
          ],
        },
        {
          label: "Image",
          name: "image",
          widget: "image",
          choose_url: false,
        },
        {
          label: "Latitude",
          name: "latitude",
          widget: "number",
          value_type: "float",
        },
        {
          label: "Longitude",
          name: "longitude",
          widget: "number",
          value_type: "float",
        },
      ],
    },
    {
      label: "Settings",
      name: "settings",
      files: [
        {
          label: "Filter sets",
          name: "filter_sets_file",
          file: "content/settings/filter_sets.json",
          allow_add: true,
          fields: [
            {
              label: "Filter set",
              name: "filter_sets",
              widget: "list",
              fields: [
                {
                  label: "Name",
                  name: "name",
                  widget: "string",
                },
                {
                  label: "Filter",
                  name: "filters",
                  widget: "list",
                  fields: [
                    { label: "Title", name: "title", widget: "string" },
                    { label: "Unique ID", name: "id", widget: "id" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default config;
