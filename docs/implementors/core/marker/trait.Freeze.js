(function() {var implementors = {};
implementors["mmtk"] = [{"text":"impl Freeze for Address","synthetic":true,"types":[]},{"text":"impl Freeze for ObjectReference","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Freeze for Allocators&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for AllocatorSelector","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Freeze for BumpAllocator&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for DumpLinearScan","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Freeze for LargeObjectAllocator&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Freeze for MallocAllocator&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for GcCounter","synthetic":true,"types":[]},{"text":"impl Freeze for ObjectCounter","synthetic":true,"types":[]},{"text":"impl !Freeze for PerSizeClassObjectCounter","synthetic":true,"types":[]},{"text":"impl Freeze for GcHookWork","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !Freeze for AnalysisManager&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for FinalizableProcessor","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Freeze for Finalization&lt;E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Freeze for ForwardFinalization&lt;E&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for HeaderByte","synthetic":true,"types":[]},{"text":"impl !Freeze for FragmentedMapper","synthetic":true,"types":[]},{"text":"impl !Freeze for Map64","synthetic":true,"types":[]},{"text":"impl Freeze for CommonFreeListPageResource","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !Freeze for FreeListPageResource&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl !Freeze for HeapMeta","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !Freeze for MonotonePageResource&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for MonotonePageResourceConditional","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !Freeze for CommonPageResource&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for SpaceDescriptor","synthetic":true,"types":[]},{"text":"impl Freeze for VMRequest","synthetic":true,"types":[]},{"text":"impl Freeze for IntArrayFreeList","synthetic":true,"types":[]},{"text":"impl Freeze for OpaquePointer","synthetic":true,"types":[]},{"text":"impl Freeze for NurseryZeroingOptions","synthetic":true,"types":[]},{"text":"impl Freeze for PlanSelector","synthetic":true,"types":[]},{"text":"impl !Freeze for UnsafeOptionsWrapper","synthetic":true,"types":[]},{"text":"impl Freeze for Options","synthetic":true,"types":[]},{"text":"impl Freeze for RawMemoryFreeList","synthetic":true,"types":[]},{"text":"impl !Freeze for ReferenceProcessors","synthetic":true,"types":[]},{"text":"impl !Freeze for ReferenceProcessor","synthetic":true,"types":[]},{"text":"impl Freeze for Semantics","synthetic":true,"types":[]},{"text":"impl Freeze for SanityChecker","synthetic":true,"types":[]},{"text":"impl&lt;P, W&gt; Freeze for ScheduleSanityGC&lt;P, W&gt;","synthetic":true,"types":[]},{"text":"impl&lt;P, W&gt; Freeze for SanityPrepare&lt;P, W&gt;","synthetic":true,"types":[]},{"text":"impl&lt;P, W&gt; Freeze for SanityRelease&lt;P, W&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Freeze for SanityGCProcessEdges&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for SideMetadataScope","synthetic":true,"types":[]},{"text":"impl Freeze for SideMetadataSpec","synthetic":true,"types":[]},{"text":"impl Freeze for MappingState","synthetic":true,"types":[]},{"text":"impl Freeze for EventCounter","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for LongCounter&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Diffable&gt;::Val: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for SizeCounter","synthetic":true,"types":[]},{"text":"impl Freeze for MonotoneNanoTime","synthetic":true,"types":[]},{"text":"impl !Freeze for SharedStats","synthetic":true,"types":[]},{"text":"impl !Freeze for Stats","synthetic":true,"types":[]},{"text":"impl !Freeze for SynchronizedCounter","synthetic":true,"types":[]},{"text":"impl !Freeze for TreadMill","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !Freeze for MMTK&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for BarrierSelector","synthetic":true,"types":[]},{"text":"impl Freeze for WriteTarget","synthetic":true,"types":[]},{"text":"impl Freeze for NoBarrier","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Freeze for ObjectRememberingBarrier&lt;E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !Freeze for ControllerCollectorContext&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Freeze for NoCopy&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for GcStatus","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !Freeze for BasePlan&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !Freeze for BaseUnsync&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !Freeze for CommonPlan&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !Freeze for CommonUnsync&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for AllocationSemantics","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Freeze for MutatorConfig&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Freeze for Mutator&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for PlanConstraints","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !Freeze for GenCopy&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !Freeze for MarkSweep&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for ALLOCATOR_MAPPING","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !Freeze for NoGC&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !Freeze for SemiSpace&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for SFTMap","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Freeze for CommonSpace&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for SpaceOptions","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !Freeze for CopySpace&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !Freeze for ImmortalSpace&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !Freeze for LargeObjectSpace&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !Freeze for LockFreeImmortalSpace&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !Freeze for MallocSpace&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for ACTIVE_CHUNKS","synthetic":true,"types":[]},{"text":"impl Freeze for ALLOC_MAP","synthetic":true,"types":[]},{"text":"impl Freeze for MARK_MAP","synthetic":true,"types":[]},{"text":"impl&lt;C&gt; Freeze for CoordinatorMessage&lt;C&gt;","synthetic":true,"types":[]},{"text":"impl&lt;C&gt; !Freeze for Scheduler&lt;C&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for SchedulerStat","synthetic":true,"types":[]},{"text":"impl Freeze for WorkStat","synthetic":true,"types":[]},{"text":"impl !Freeze for WorkerLocalStat","synthetic":true,"types":[]},{"text":"impl Freeze for WorkBucketStage","synthetic":true,"types":[]},{"text":"impl Freeze for WorkerLocalPtr","synthetic":true,"types":[]},{"text":"impl&lt;C&gt; !Freeze for Worker&lt;C&gt;","synthetic":true,"types":[]},{"text":"impl&lt;C&gt; Freeze for WorkerGroup&lt;C&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for ScheduleCollection","synthetic":true,"types":[]},{"text":"impl&lt;P, W&gt; Freeze for Prepare&lt;P, W&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Freeze for PrepareMutator&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;W&gt; Freeze for PrepareCollector&lt;W&gt;","synthetic":true,"types":[]},{"text":"impl&lt;P, W&gt; Freeze for Release&lt;P, W&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Freeze for ReleaseMutator&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;W&gt; Freeze for ReleaseCollector&lt;W&gt;","synthetic":true,"types":[]},{"text":"impl&lt;ScanEdges&gt; Freeze for StopMutators&lt;ScanEdges&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for EndOfGC","synthetic":true,"types":[]},{"text":"impl&lt;Edges&gt; Freeze for ScanStackRoots&lt;Edges&gt;","synthetic":true,"types":[]},{"text":"impl&lt;Edges&gt; Freeze for ScanStackRoot&lt;Edges&gt;","synthetic":true,"types":[]},{"text":"impl&lt;Edges&gt; Freeze for ScanVMSpecificRoots&lt;Edges&gt;","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Freeze for ProcessEdgesBase&lt;E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;Edges&gt; Freeze for ScanObjects&lt;Edges&gt;","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Freeze for ProcessModBuf&lt;E&gt;","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()