initSidebarItems({"mod":[["copyspace",""],["immortalspace",""],["largeobjectspace",""],["lockfreeimmortalspace",""],["mallocspace",""],["space","This class defines and manages spaces.  Each policy is an instance of a space.  A space is a region of virtual memory (contiguous or discontigous) which is subject to the same memory management regime.  Multiple spaces (instances of this class or its descendants) may have the same policy (eg there could be numerous instances of CopySpace, each with different roles). Spaces are defined in terms of a unique region of virtual memory, so no two space instances ever share any virtual memory. In addition to tracking virtual memory use and the mapping to policy, spaces also manage memory consumption (used virtual memory)."]]});