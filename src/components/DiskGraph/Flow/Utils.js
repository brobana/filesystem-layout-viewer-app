export const createFlow = (volumeData) => {
  const volumeNodes = [];
  const volumeEdges = [];
  const initialYPosition = 80;
  let highestYPosition = initialYPosition;

  for (const vg of volumeData.volumeGroups) {
    let yPosition =
      highestYPosition > initialYPosition ? highestYPosition : initialYPosition;
    const savedYPosition = yPosition;

    volumeNodes.push({
      id: 'vg-' + vg.name,
      sourcePosition: 'right',
      targetPosition: 'left',
      data: { name: vg.name, size: vg.size, free: vg.free },
      position: { x: 500, y: yPosition },
      type: 'VgNode',
    });

    for (const relatedPv of vg.relatedPvs) {
      // Create the PV node then connect it to the VG node
      const pv = volumeData.physicalVolumes.filter(
        (el) => el.name === relatedPv
      )[0];
      volumeNodes.push({
        id: 'pv-' + pv.name,
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { name: pv.name, size: pv.size },
        position: { x: 250, y: yPosition },
        type: 'PvNode',
      });
      volumeEdges.push({
        id: 'pv-' + pv.name + '-vg-' + vg.name,
        source: 'pv-' + pv.name,
        target: 'vg-' + vg.name,
        type: 'default',
        animated: true,
      });
      // Create the Disk node then connect it to the PV node
      const disk = volumeData.disks.filter(
        (el) => el.name === pv.relatedDisk
      )[0];
      if (!volumeNodes.some((el) => el.id === 'disk-' + disk.name)) {
        volumeNodes.push({
          id: 'disk-' + disk.name,
          sourcePosition: 'right',
          data: { name: disk.name, size: disk.size },
          position: { x: 0, y: yPosition },
          type: 'DiskNode',
        });
      }
      volumeEdges.push({
        id: 'disk-' + disk.name + '-pv-' + pv.name,
        source: 'disk-' + disk.name,
        target: 'pv-' + pv.name,
        type: 'default',
        animated: true,
      });
      yPosition += 120;
    }

    highestYPosition =
      yPosition > highestYPosition ? yPosition : highestYPosition;

    yPosition = savedYPosition;

    for (const relatedLv of vg.relatedLvs) {
      // Create the LV node then connect the VG node to it
      const lv = volumeData.logicalVolumes.filter(
        (el) => el.name === relatedLv
      )[0];
      volumeNodes.push({
        id: 'lv-' + lv.name,
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { name: lv.name, size: lv.size },
        position: { x: 750, y: yPosition },
        type: 'LvNode',
      });
      volumeEdges.push({
        id: 'vg-' + vg.name + 'lv-' + lv.name,
        source: 'vg-' + vg.name,
        target: 'lv-' + lv.name,
        type: 'default',
        animated: true,
      });
      // Create the FS node then connect the LV node to it
      const fs = volumeData.filesystems.filter(
        (el) => el.name === lv.relatedFs
      )[0];
      if (fs) {
        volumeNodes.push({
          id: 'fs-' + fs.name,
          sourcePosition: 'right',
          targetPosition: 'left',
          data: {
            mountpoint: fs.mountpoint,
            type: fs.type,
            size: fs.size,
            used: fs.used,
          },
          position: { x: 1000, y: yPosition },
          type: 'FsNode',
        });
        volumeEdges.push({
          id: 'lv-' + lv.name + '-fs-' + fs.name,
          source: 'lv-' + lv.name,
          target: 'fs-' + fs.name,
          type: 'default',
          animated: true,
        });
      }
      yPosition += 120;
    }

    highestYPosition =
      yPosition > highestYPosition ? yPosition : highestYPosition;
  }

  // Unused PVs
  const unusedPvs = volumeData.physicalVolumes.filter(
    (el) => el.relatedVg.length === 0
  );
  for (const unusedPV of unusedPvs) {
    let yPosition = highestYPosition;
    // Create the PV node
    const pv = volumeData.physicalVolumes.filter(
      (el) => el.name === unusedPV.name
    )[0];
    volumeNodes.push({
      id: 'pv-' + pv.name,
      sourcePosition: 'right',
      targetPosition: 'left',
      data: { name: pv.name, size: pv.size },
      position: { x: 250, y: yPosition },
      type: 'PvNode',
    });
    // Create the Disk node then connect it to the PV node
    const disk = volumeData.disks.filter((el) => el.name === pv.relatedDisk)[0];
    if (!volumeNodes.some((el) => el.id === 'disk-' + disk.name)) {
      volumeNodes.push({
        id: 'disk-' + disk.name,
        sourcePosition: 'right',
        data: { name: disk.name, size: disk.size },
        position: { x: 0, y: yPosition },
        type: 'DiskNode',
      });
    }
    volumeEdges.push({
      id: 'disk-' + disk.name + '-pv-' + pv.name,
      source: 'disk-' + disk.name,
      target: 'pv-' + pv.name,
      type: 'default',
      animated: true,
    });
    yPosition += 120;
    highestYPosition =
      yPosition > highestYPosition ? yPosition : highestYPosition;
  }

  //Unused Disks
  const unusedDisks = volumeData.disks.filter(
    (el) => el.relatedPvs.length === 0
  );
  for (const disk of unusedDisks) {
    let yPosition = highestYPosition;
    volumeNodes.push({
      id: 'disk-' + disk.name,
      sourcePosition: 'right',
      data: { name: disk.name, size: disk.size },
      position: { x: 0, y: yPosition },
      type: 'DiskNode',
    });
  }

  return { volumeNodes, volumeEdges };
};
