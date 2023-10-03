import { useGetAdminsQuery } from "./adminApiSlice";

import { memo } from "react";

const AdminsList = () => {


    const {
        data:admin,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetAdminsQuery(undefined, {
        pollingInterval: 15000,
        refreshOnFocus: true,
        refreshOnMountOrArgChange: true
    })


    let content


    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {

        const {ids,entities} = admin

            const {admin_Id,name,email} = entities[1]

            return(
                <ul>
                    <li>{admin_Id}</li>
                    <li>{name}</li>
                    <li>{email}</li>

                </ul>
            )
    }

    return content

}
 const memoizedAdmin = memo(AdminsList)
export default memoizedAdmin;