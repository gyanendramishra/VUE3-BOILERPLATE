import { EPropertyForValue, EPropertyRegionValue } from "./";

/**
 * Elastic query body for getting recommended properties in KSA
 */
export const EQRecommendedPropertyFORKSA = {
  from: 0,
  size: 3,
  _source: [
    "id",
    "darReference",
    "en.slug",
    "en.title",
    "en.country",
    "en.zone",
    "en.city",
    "en.unitType",
    "en.currencyType",
    "en.propertyMainType",
    "ar.slug",
    "ar.title",
    "ar.country",
    "ar.zone",
    "ar.city",
    "ar.unitType",
    "ar.currencyType",
    "ar.propertyMainType",
    "attribute.noOfBedrooms",
    "attribute.noOfBathrooms",
    "attribute.builtUpArea",
    "attribute.carpetArea",
    "attribute.salePrice",
    "attribute.expectedRent",
    "propertyOwner.email",
    "propertyOwner.whatsApp",
    "propertyOwner.whatsAppNumberCountryCode",
    "propertyOwner.phone",
    "propertyOwner.phoneNumberCountryCode",
    "propertyOwner.userAvatar",
    "propertyOwner.companyLogo",
    "searchCriteria.managedById",
    "searchCriteria.propertyOwnerId",
    "searchCriteria.addedBy",
    "searchCriteria.projectId",
    "searchCriteria.unitTypeId",
    "searchCriteria.currencyTypeId",
    "searchCriteria.countryId",
    "searchCriteria.cityId",
    "searchCriteria.zoneId",
    "searchCriteria.propertyMainTypeId",
    "searchCriteria.propertyForId",
    "propertyFiles.images",
    "external360Link",
    "externalVideoLink",
    "isExclusive",
    "isGreatPrice",
    "isHighInvestmentReturn",
    "propertyForSlug",
  ],
  query: {
    bool: {
      must: [
        {
          match: {
            isRecommended: true,
          },
        },
        {
          match: {
            "searchCriteria.propertyRegionId": EPropertyRegionValue.KSA,
          },
        },
        {
          match: {
            "searchCriteria.propertyForId": EPropertyForValue.SALE,
          },
        },
      ],
    },
  },
  sort: [
    {
      publishedAt: {
        order: "desc",
      },
    },
  ],
};

/**
 * Elastic query body for getting recommended properties in International
 */
export const EQRecommendedPropertyFORInternational = {
  from: 0,
  size: 3,
  _source: [
    "id",
    "darReference",
    "en.slug",
    "en.title",
    "en.country",
    "en.zone",
    "en.city",
    "en.unitType",
    "en.currencyType",
    "en.propertyMainType",
    "ar.slug",
    "ar.title",
    "ar.country",
    "ar.zone",
    "ar.city",
    "ar.unitType",
    "ar.currencyType",
    "ar.propertyMainType",
    "attribute.noOfBedrooms",
    "attribute.noOfBathrooms",
    "attribute.builtUpArea",
    "attribute.carpetArea",
    "attribute.salePrice",
    "attribute.expectedRent",
    "propertyOwner.email",
    "propertyOwner.whatsApp",
    "propertyOwner.whatsAppNumberCountryCode",
    "propertyOwner.phone",
    "propertyOwner.phoneNumberCountryCode",
    "propertyOwner.userAvatar",
    "propertyOwner.companyLogo",
    "searchCriteria.managedById",
    "searchCriteria.propertyOwnerId",
    "searchCriteria.addedBy",
    "searchCriteria.projectId",
    "searchCriteria.unitTypeId",
    "searchCriteria.currencyTypeId",
    "searchCriteria.countryId",
    "searchCriteria.cityId",
    "searchCriteria.zoneId",
    "searchCriteria.propertyMainTypeId",
    "searchCriteria.propertyForId",
    "propertyFiles.images",
    "external360Link",
    "externalVideoLink",
    "isExclusive",
    "isGreatPrice",
    "isHighInvestmentReturn",
    "propertyForSlug",
  ],
  query: {
    bool: {
      must: [
        /*{
          match: {
            isRecommended: true,
          },
        },*/
        {
          match: {
            "searchCriteria.propertyRegionId":
              EPropertyRegionValue.INTERNATIONAL,
          },
        },
        {
          match: {
            "searchCriteria.propertyForId": EPropertyForValue.SALE,
          },
        },
      ],
    },
  },
  sort: [
    {
      publishedAt: {
        order: "desc",
      },
    },
  ],
};

/**
 * Elastic query body for getting recommended properties in International
 */
export const EQSearchProperty = {
  _source: [
    "id",
    "darReference",
    "en.slug",
    "en.title",
    "en.country",
    "en.zone",
    "en.city",
    "en.unitType",
    "en.currencyType",
    "en.propertyMainType",
    "ar.slug",
    "ar.title",
    "ar.country",
    "ar.zone",
    "ar.city",
    "ar.unitType",
    "ar.currencyType",
    "ar.propertyMainType",
    "attribute.noOfBedrooms",
    "attribute.noOfBathrooms",
    "attribute.builtUpArea",
    "attribute.carpetArea",
    "attribute.salePrice",
    "attribute.expectedRent",
    "propertyOwner.email",
    "propertyOwner.whatsApp",
    "propertyOwner.whatsAppNumberCountryCode",
    "propertyOwner.phone",
    "propertyOwner.phoneNumberCountryCode",
    "propertyOwner.userAvatar",
    "propertyOwner.companyLogo",
    "searchCriteria.managedById",
    "searchCriteria.propertyOwnerId",
    "searchCriteria.addedBy",
    "searchCriteria.projectId",
    "searchCriteria.unitTypeId",
    "searchCriteria.currencyTypeId",
    "searchCriteria.countryId",
    "searchCriteria.cityId",
    "searchCriteria.zoneId",
    "searchCriteria.propertyMainTypeId",
    "searchCriteria.propertyForId",
    "searchCriteria.propertyForSlug",
    "propertyFiles.images",
    "external360Link",
    "externalVideoLink",
    "isExclusive",
    "isGreatPrice",
    "isHighInvestmentReturn",
    "location",
  ],
  sort: [
    {
      publishedAt: {
        order: "desc",
      },
    },
  ],
};

/**
 * Elastic query body for getting property detail
 */
export const EQPropertyDetail = {
  _source: [
    "id",
    "darReference",
    "en.slug",
    "en.title",
    "en.description",
    "en.country",
    "en.zone",
    "en.city",
    "en.unitType",
    "en.currencyType",
    "en.propertyMainType",
    "en.projectName",
    "en.furnishingType",
    "en.facingType",
    "ar.roomType",
    "en.possessionType",
    "ar.slug",
    "ar.title",
    "ar.description",
    "ar.country",
    "ar.zone",
    "ar.city",
    "ar.unitType",
    "ar.currencyType",
    "ar.propertyMainType",
    "ar.projectName",
    "ar.furnishingType",
    "ar.facingType",
    "ar.roomType",
    "ar.possessionType",
    "attribute.noOfBedrooms",
    "attribute.noOfBathrooms",
    "attribute.builtUpArea",
    "attribute.carpetArea",
    "attribute.salePrice",
    "attribute.expectedRent",
    "attribute.noOfRetailOutlets",
    "attribute.noOfApartments",
    "attribute.noOfWaterWells",
    "attribute.noOfPalmTrees",
    "attribute.noOfParkings",
    "attribute.noOfFloors",
    "attribute.floorNumber",
    "attribute.streetWidth",
    "attribute.campCapacity",
    "attribute.completionYear",
    "attribute.yearlyCharges",
    "attribute.securityDepositAmount",
    "propertyOwner.email",
    "propertyOwner.whatsApp",
    "propertyOwner.whatsAppNumberCountryCode",
    "propertyOwner.phone",
    "propertyOwner.phoneNumberCountryCode",
    "propertyOwner.userAvatar",
    "propertyOwner.companyLogo",
    "searchCriteria.managedById",
    "searchCriteria.propertyOwnerId",
    "searchCriteria.addedBy",
    "searchCriteria.projectId",
    "searchCriteria.countryId",
    "searchCriteria.cityId",
    "searchCriteria.zoneId",
    "searchCriteria.stateId",
    "searchCriteria.propertyMainTypeId",
    "searchCriteria.propertyOptionId",
    "searchCriteria.propertyForId",
    "searchCriteria.amenities",
    "searchCriteria.propertyRegionId",
    "searchCriteria.unitTypeId",
    "searchCriteria.currencyTypeId",
    "searchCriteriaSlug.propertyForSlug",
    "searchCriteriaSlug.propertyMainTypeSlug",
    "propertyFiles.images",
    "propertyFiles.floorPlans",
    "propertyFiles.brochure",
    "location.lat",
    "location.lon",
    "external360Link",
    "externalVideoLink",
    "isExclusive",
    "isGreatPrice",
    "isHighInvestmentReturn",
  ],
};
