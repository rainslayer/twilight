"use client";

import { Button, Flex, Text } from "@chakra-ui/react";
import { useFormik } from "formik";
import {
  Api,
  InfectionsSearchRequest,
  InfectionsSearchResponseDto,
} from "./Api";
import { InputWithTagList } from "./components/InputWithTagList";
import { domainValidator } from "./utils/domainValidator";
import { emailDomainValidator } from "./utils/emailDomainValidator";
import { ipValidator } from "./utils/ipValidator";
import { RangeDatepicker } from "chakra-dayzed-datepicker";
import { format } from "date-fns";
import { useMemo, useState } from "react";
import { rootDomainValidator } from "./utils/rootDomainValidator";
import { appDomainValidator } from "./utils/appDomainValidator";
import { InfectionsInfoModal } from "./components/InfectionsInfoModal";
import { getMockData } from "./utils/getMockData";

export default function Home() {
  const [data, setData] = useState<InfectionsSearchResponseDto | null>(null);
  const [error, setError] = useState<string | null>(null);
  const api = useMemo(
    () =>
      new Api({
        baseUrl: process.env.NEXT_PUBLIC_TWILIGHT_API_URL,
        baseApiParams: {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TWILIGHT_API_KEY}`,
          },
        },
      }),
    []
  );

  const formik = useFormik<InfectionsSearchRequest>({
    initialValues: {
      size: 100,
    },
    onSubmit: handleSearch,
  });

  async function handleSearch(values: InfectionsSearchRequest) {
    if (
      formik.values.domains?.length ||
      formik.values.root_domains?.length ||
      formik.values.app_domains?.length ||
      formik.values.email_domains?.length ||
      formik.values.ips?.length
    ) {
      try {
        const response = await api.infections.searchDataInfectionsSearchPost(
          values
        );
        const data = await response.json();
        setData(data);
      } catch (e) {
        setError("Something went wrong");
      } finally {
        formik.setSubmitting(false);
      }
    } else {
      setError("Select at least one domain or ip address");
    }
  }

  async function handleLoadMore() {
    if (data?.next) {
      try {
        const response = await api.infections.searchDataInfectionsSearchPost({
          next: data.next,
        });
        const newData = await response.json();
        setData(newData);
      } catch (e) {
        setError("Something went wrong");
      }
    }
  }

  function handleAddValue(formikField: keyof InfectionsSearchRequest) {
    return function (tag: string) {
      if (!Array.isArray(formik.values[formikField])) {
        formik.setFieldValue(formikField, [tag]);
      } else {
        const values = formik.values[formikField].filter((v) => v !== tag);

        formik.setFieldValue(formikField, [...values, tag]);
      }
    };
  }

  function handleRemoveValue(formikField: keyof InfectionsSearchRequest) {
    return function (tag: string) {
      if (Array.isArray(formik.values[formikField])) {
        const values = formik.values[formikField].filter((v) => v !== tag);

        formik.setFieldValue(formikField, values);
      }
    };
  }

  const selectedDates = useMemo(() => {
    const dates: Array<Date> = [];

    if (formik.values.infection_date_from) {
      dates.push(new Date(formik.values.infection_date_from));

      if (formik.values.infection_date_to) {
        dates.push(new Date(formik.values.infection_date_to));
      }
    }

    return dates;
  }, [formik.values.infection_date_from, formik.values.infection_date_to]);

  // ============== MOCKED SECTION, USED IN ABSENCE OF WORKING API KEY AND CORS RESTRICTIONS FOR PoW =================
  function handleSearchMocked() {
    const data = getMockData();
    setData(data);
  }

  function* handleLoadMoreMocked() {
    yield getMockData(2);
    yield getMockData(3);
    yield getMockData(4, null);
  }

  const mocked_generator = useMemo(() => handleLoadMoreMocked(), []);

  function loadMoreMocked() {
    const { value } = mocked_generator.next();

    if (value) {
      setData(value);
    }
  }
  // ==================================================================

  return (
    <>
      <Flex
        margin="auto"
        marginTop="10vh"
        direction="column"
        alignItems="center"
      >
        <Text fontSize="4xl" marginBottom={10}>
          Twilight
        </Text>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
        >
          <Flex direction="column" width="50vw" gap={5}>
            <InputWithTagList
              title="Add new domain to search"
              placeholder="Example: domain.com, www.domain.com, http(s)://domain.com"
              tags={formik.values.domains}
              addTag={handleAddValue("domains")}
              removeTag={handleRemoveValue("domains")}
              validator={domainValidator}
            />
            <InputWithTagList
              title="Add new root domain to search"
              placeholder="Example: domain.com"
              tags={formik.values.root_domains}
              addTag={handleAddValue("root_domains")}
              removeTag={handleRemoveValue("root_domains")}
              validator={rootDomainValidator}
            />
            <InputWithTagList
              title="Add new app domain to search"
              placeholder="Example: app.domain.com"
              tags={formik.values.app_domains}
              addTag={handleAddValue("app_domains")}
              removeTag={handleRemoveValue("app_domains")}
              validator={appDomainValidator}
            />
            <InputWithTagList
              title="Add new email domain to search"
              placeholder="Example: http(s)://gmail.com, www.outlook.com, hotmail.com"
              tags={formik.values.email_domains}
              addTag={handleAddValue("email_domains")}
              removeTag={handleRemoveValue("email_domains")}
              validator={emailDomainValidator}
            />
            <InputWithTagList
              title="Add new ip address to search"
              placeholder="Example: 127.0.0.1, 2001:db8:3333:4444:CCCC:DDDD:EEEE:FFFF"
              tags={formik.values.ips}
              addTag={handleAddValue("ips")}
              removeTag={handleRemoveValue("ips")}
              validator={ipValidator}
            />
          </Flex>
          <Flex
            justifyContent="center"
            direction="column"
            textAlign="center"
            gap={2}
            mt={5}
          >
            <Text>Select infection dates range</Text>
            <RangeDatepicker
              selectedDates={selectedDates}
              onDateChange={(dates) => {
                const [from, to] = dates;

                if (from) {
                  formik.setFieldValue(
                    "infection_date_from",
                    format(from, "yyyy-MM-dd'T'HH:mm:ss'Z'")
                  );

                  if (to) {
                    formik.setFieldValue(
                      "infection_date_to",
                      format(to, "yyyy-MM-dd'T'HH:mm:ss'Z'")
                    );
                  }
                }
              }}
              maxDate={new Date()}
            />
          </Flex>
          <Button
            sx={{ width: "100%", marginTop: 5 }}
            type="submit"
            onBlur={() => setError(null)}
            disabled={formik.isSubmitting}
          >
            Search
          </Button>
          {error && (
            <Text color="red" mt={5}>
              {error}
            </Text>
          )}
        </form>
      </Flex>
      <InfectionsInfoModal
        data={data}
        loadMoreInfections={handleLoadMore}
        closeModal={() => setData(null)}
      />
    </>
  );
}
