import { useMemo } from "react"

export const useSearch = (args, query) => {
    const filteredArgs = useMemo(() => {
        if(!query) {
            return args;
        }
        return args.filter(element => element?.name.toLowerCase().includes(query.toLowerCase()))
    }, [args, query])
    return filteredArgs;
}