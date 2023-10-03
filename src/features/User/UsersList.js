import { useGetUsersQuery } from "./userApiSlice";

import { memo } from "react";

const UsersList = () => {


    const {
        data:user,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetUsersQuery(undefined, {
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

        const {ids,entities} = user

            const {customer_Id,name,email} = entities[1]

            return(
                <ul>
                    <li>{customer_Id}</li>
                    <li>{name}</li>
                    <li>{email}</li>

                </ul>
            )
    }

    return content

}
 const memoizedUser = memo(UsersList)
export default memoizedUser;