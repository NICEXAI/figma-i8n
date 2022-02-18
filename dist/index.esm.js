const matchRuleDict = {
    "fullscreenMenu.BackToFiles": "a[data-onboarding-key='back-to-files']>span[class^='multilevel_dropdown--name']",
    "fullscreenMenu.QuickActions": "div[data-testid='dropdown-option-Quick actions…']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.File": "div[data-testid='dropdown-option-File']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.File.NewDesignFile": "div[data-testid='dropdown-option-New design file']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.File.NewFigJamFile": "div[data-testid='dropdown-option-New FigJam file']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.File.NewFromSketchFile": "div[data-testid='dropdown-option-New from Sketch file…']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.File.PlaceImage": "div[data-testid='dropdown-option-Place image...']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.File.SaveLocalCopy": "div[data-testid='dropdown-option-Save local copy…']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.File.SaveToVersionHistory": "div[data-testid='dropdown-option-Save to version history…']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.File.ShowVersionHistory": "div[data-testid='dropdown-option-Show version history']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.File.Export": "div[data-testid='dropdown-option-Export…']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.File.ExportFramesToPDF": "div[data-testid='dropdown-option-Export frames to PDF…']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Edit": "div[data-testid='dropdown-option-Edit']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Edit.Undo": "div[data-testid='dropdown-option-Undo']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Edit.Redo": "div[data-testid='dropdown-option-Redo']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Edit.CopyAs": "div[data-testid='dropdown-option-Copy as']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Edit.PasteOverSelection": "div[data-testid='dropdown-option-Paste over selection']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Edit.PasteToReplace": "div[data-testid='dropdown-option-Paste to replace']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Edit.Duplicate": "div[data-testid='dropdown-option-Duplicate']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Edit.Delete": "div[data-testid='dropdown-option-Delete']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Edit.SetDefaultProperties": "div[data-testid='dropdown-option-Set default properties']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Edit.CopyProperties": "div[data-testid='dropdown-option-Copy properties']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Edit.PasteProperties": "div[data-testid='dropdown-option-Paste properties']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Edit.PickColor": "div[data-testid='dropdown-option-Pick color']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Edit.SelectAll": "div[data-testid='dropdown-option-Select all']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Edit.SelectNone": "div[data-testid='dropdown-option-Select none']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Edit.SelectInverse": "div[data-testid='dropdown-option-Select inverse']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Edit.SelectAllWithSameProperties": "div[data-testid='dropdown-option-Select all with same properties']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Edit.SelectAllWithSameFill": "div[data-testid='dropdown-option-Select all with same fill']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Edit.SelectAllWithSameStroke": "div[data-testid='dropdown-option-Select all with same stroke']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Edit.SelectAllWithSameEffect": "div[data-testid='dropdown-option-Select all with same effect']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Edit.SelectAllWithSameTextProperties": "div[data-testid='dropdown-option-Select all with same text properties']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Edit.SelectAllWithSameFont": "div[data-testid='dropdown-option-Select all with same font']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Edit.SelectAllWithSameInstance": "div[data-testid='dropdown-option-Select all with same instance']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.View": "div[data-testid='dropdown-option-View']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.View.PixelGrid": "div[data-testid='dropdown-option-Pixel grid']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.View.LayoutGrids": "div[data-testid='dropdown-option-Layout grids']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.View.Rulers": "div[data-testid='dropdown-option-Rulers']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.View.ShowSlices": "div[data-testid='dropdown-option-Show slices']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.View.Comments": "div[data-testid='dropdown-option-Comments']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.View.Outlines": "div[data-testid='dropdown-option-Outlines']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.View.PixelPreview": "div[data-testid='dropdown-option-Pixel preview']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.View.MaskOutlines": "div[data-testid='dropdown-option-Mask outlines']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.View.FrameOutlines": "div[data-testid='dropdown-option-Frame outlines']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.View.ResourceUse": "div[data-testid='dropdown-option-Resource use']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.View.ShowOrHideUI": "div[data-testid='dropdown-option-Show/Hide UI']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.View.MultiplayerCursors": "div[data-testid='dropdown-option-Multiplayer cursors']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.View.Panels": "div[data-testid='dropdown-option-Panels']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.View.ZoomIn": "div[data-testid='dropdown-option-Zoom in']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.View.ZoomOut": "div[data-testid='dropdown-option-Zoom out']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.View.ZoomTo100%": "div[data-testid='dropdown-option-Zoom to 100%']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.View.ZoomToFit": "div[data-testid='dropdown-option-Zoom to fit']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.View.ZoomToSelection": "div[data-testid='dropdown-option-Zoom to selection']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.View.PreviousPage": "div[data-testid='dropdown-option-Previous page']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.View.NextPage": "div[data-testid='dropdown-option-Next page']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.View.ZoomToPreviousFrame": "div[data-testid='dropdown-option-Zoom to previous frame']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.View.ZoomToNextFrame": "div[data-testid='dropdown-option-Zoom to next frame']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.View.FindPreviousFrame": "div[data-testid='dropdown-option-Find previous frame']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.View.FindNextFrame": "div[data-testid='dropdown-option-Find next frame']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Object": "div[data-testid='dropdown-option-Object']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Object.GroupSelection": "div[data-testid='dropdown-option-Group selection']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Object.CreateSection": "div[data-testid='dropdown-option-Create section']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Object.FrameSelection": "div[data-testid='dropdown-option-Frame selection']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Object.UngroupSelection": "div[data-testid='dropdown-option-Ungroup selection']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Object.UseAsMask": "div[data-testid='dropdown-option-Use as mask']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Object.SetAsThumbnail": "div[data-testid='dropdown-option-Set as thumbnail']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Object.AddAutoLayout": "div[data-testid='dropdown-option-Add auto layout']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Object.CreateComponent": "div[data-testid='dropdown-option-Create component']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Object.ResetAllOverrides": "div[data-testid='dropdown-option-Reset all overrides']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Object.DetachInstance": "div[data-testid='dropdown-option-Detach instance']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Object.MainComponent": "div[data-testid='dropdown-option-Main component']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Object.BringToFront": "div[data-testid='dropdown-option-Bring to front']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Object.BringForward": "div[data-testid='dropdown-option-Bring forward']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Object.SendBackward": "div[data-testid='dropdown-option-Send backward']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Object.SendToBack": "div[data-testid='dropdown-option-Send to back']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Object.flipHorizontal": "div[data-testid='dropdown-option-Flip horizontal']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Object.flipVertical": "div[data-testid='dropdown-option-Flip vertical']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Object.Rotate180": "div[data-testid='dropdown-option-Rotate 180˚']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Object.Rotate90Left": "div[data-testid='dropdown-option-Rotate 90˚ left']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Object.Rotate90Right": "div[data-testid='dropdown-option-Rotate 90˚ right']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Object.FlattenSelection": "div[data-testid='dropdown-option-Flatten selection']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Object.OutlineStroke": "div[data-testid='dropdown-option-Outline stroke']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Object.BooleanGroups": "div[data-testid='dropdown-option-Boolean groups']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Object.RasterizeSelection": "div[data-testid='dropdown-option-Rasterize selection']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Object.ShowOrHideSelection": "div[data-testid='dropdown-option-Show/Hide selection']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Object.LockOrUnlockSelection": "div[data-testid='dropdown-option-Lock/Unlock selection']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Object.HideOtherLayers": "div[data-testid='dropdown-option-Hide other layers']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Object.CollapseLayers": "div[data-testid='dropdown-option-Collapse layers']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Object.RemoveFill": "div[data-testid='dropdown-option-Remove fill']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Object.RemoveStroke": "div[data-testid='dropdown-option-Remove stroke']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Object.SwapFillAndStroke": "div[data-testid='dropdown-option-Swap fill and stroke']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Vector": "div[data-testid='dropdown-option-Vector']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Text": "div[data-testid='dropdown-option-Text']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Arrange": "div[data-testid='dropdown-option-Arrange']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Plugins": "div[data-testid='dropdown-option-Plugins']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Plugins.ManagePlugins": "div[data-testid='dropdown-option-Manage plugins…']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Plugins.BrowsePluginsInCommunity": "div[data-testid='dropdown-option-Browse plugins in Community']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Integrations": "div[data-testid='dropdown-option-Integrations']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Preferences": "div[data-testid='dropdown-option-Preferences']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.Libraries": "div[data-testid='dropdown-option-Libraries']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.GetDesktopApp": "div[data-testid='dropdown-option-Get desktop app']>div[class^='multilevel_dropdown--name']",
    "fullscreenMenu.HelpAndAccount": "div[data-testid='dropdown-option-Help and account']>div[class^='multilevel_dropdown--name']",
    "contextMenu.Copy": "div[data-testid='dropdown-option-Copy']>div[class^='multilevel_dropdown--name']",
    "contextMenu.PasteHere": "div[data-testid='dropdown-option-Paste here']>div[class^='multilevel_dropdown--name']",
    "contextMenu.CopyOrPasteAs": "div[data-testid='dropdown-option-Copy/Paste as']>div[class^='multilevel_dropdown--name']",
    "contextMenu.CopyOrPasteAs.CopyAsCSS": "div[data-testid='dropdown-option-Copy as CSS']>div[class^='multilevel_dropdown--name']",
    "contextMenu.CopyOrPasteAs.CopyAsSVG": "div[data-testid='dropdown-option-Copy as SVG']>div[class^='multilevel_dropdown--name']",
    "contextMenu.CopyOrPasteAs.CopyAsPNG": "div[data-testid='dropdown-option-Copy as PNG']>div[class^='multilevel_dropdown--name']",
    "contextMenu.CopyOrPasteAs.CopyLink": "div[data-testid='dropdown-option-Copy  link']>div[class^='multilevel_dropdown--name']",
    "contextMenu.Ungroup": "div[data-testid='dropdown-option-Ungroup']>div[class^='multilevel_dropdown--name']",
    "contextMenu.Flatten": "div[data-testid='dropdown-option-Flatten']>div[class^='multilevel_dropdown--name']",
    "contextMenu.ShowOrHide": "div[data-testid='dropdown-option-Show/Hide']>div[class^='multilevel_dropdown--name']",
    "contextMenu.LockOrUnlock": "div[data-testid='dropdown-option-Lock/Unlock']>div[class^='multilevel_dropdown--name']",
    "contextMenu.ShowOrHideComments": "div[data-testid='dropdown-option-Show/Hide comments']>div[class^='multilevel_dropdown--name']",
    "contextMenu.CursorChat": "div[data-testid='dropdown-option-Cursor chat']>div[class^='multilevel_dropdown--name']"
};
const getTargetElement = function (originElements) {
    let matchElement = {};
    for (const element of originElements) {
        if (!element.querySelector) {
            continue;
        }
        console.log(element.innerHTML);
        for (const elementName in matchRuleDict) {
            if (!Object.prototype.hasOwnProperty.call(matchRuleDict, elementName)) {
                continue;
            }
            const rule = matchRuleDict[elementName];
            const target = element.querySelector(rule);
            if (target && (target === null || target === void 0 ? void 0 : target.nodeType) == 1) {
                matchElement[elementName] = target;
            }
        }
    }
    return matchElement;
};

var zhCn = {
    "fullscreenMenu.BackToFiles": "返回文件列表",
    "fullscreenMenu.QuickActions": "快速操作…",
    "fullscreenMenu.File": "文件",
    "fullscreenMenu.File.NewDesignFile": "新建设计文件",
    "fullscreenMenu.File.NewFigJamFile": "新建 FigJam 文件",
    "fullscreenMenu.File.NewFromSketchFile": "从 Sketch 文件新建…",
    "fullscreenMenu.File.PlaceImage": "导入图片…",
    "fullscreenMenu.File.SaveLocalCopy": "保存本地副本…",
    "fullscreenMenu.File.SaveToVersionHistory": "保存至版本历史…",
    "fullscreenMenu.File.ShowVersionHistory": "查看版本历史",
    "fullscreenMenu.File.Export": "导出…",
    "fullscreenMenu.File.ExportFramesToPDF": "导出画框为 PDF…",
    "fullscreenMenu.Edit": "编辑",
    "fullscreenMenu.Edit.Undo": "撤销",
    "fullscreenMenu.Edit.Redo": "重做",
    "fullscreenMenu.Edit.CopyAs": "复制为",
    "fullscreenMenu.Edit.PasteOverSelection": "粘贴至所选位置",
    "fullscreenMenu.Edit.PasteToReplace": "粘贴替换",
    "fullscreenMenu.Edit.Duplicate": "创建副本",
    "fullscreenMenu.Edit.Delete": "删除",
    "fullscreenMenu.Edit.SetDefaultProperties": "设置默认属性",
    "fullscreenMenu.Edit.CopyProperties": "复制属性",
    "fullscreenMenu.Edit.PasteProperties": "粘贴属性",
    "fullscreenMenu.Edit.PickColor": "吸取颜色",
    "fullscreenMenu.Edit.SelectAll": "全选",
    "fullscreenMenu.Edit.SelectNone": "取消选择",
    "fullscreenMenu.Edit.SelectInverse": "反选",
    "fullscreenMenu.Edit.SelectAllWithSameProperties": "选择全部相同属性",
    "fullscreenMenu.Edit.SelectAllWithSameFill": "选择全部相同填充颜色",
    "fullscreenMenu.Edit.SelectAllWithSameStroke": "选择全部相同描边",
    "fullscreenMenu.Edit.SelectAllWithSameEffect": "选择全部相同效果",
    "fullscreenMenu.Edit.SelectAllWithSameTextProperties": "选择全部相同文本属性",
    "fullscreenMenu.Edit.SelectAllWithSameFont": "选择全部相同字体",
    "fullscreenMenu.Edit.SelectAllWithSameInstance": "选择全部相同组件实例",
    "fullscreenMenu.View": "查看",
    "fullscreenMenu.View.PixelGrid": "像素网格",
    "fullscreenMenu.View.LayoutGrids": "布局网格",
    "fullscreenMenu.View.Rulers": "标尺",
    "fullscreenMenu.View.ShowSlices": "显示切片",
    "fullscreenMenu.View.Comments": "评论",
    "fullscreenMenu.View.Outlines": "轮廓",
    "fullscreenMenu.View.PixelPreview": "像素预览",
    "fullscreenMenu.View.MaskOutlines": "蒙版轮廓",
    "fullscreenMenu.View.FrameOutlines": "画框轮廓",
    "fullscreenMenu.View.ResourceUse": "资源使用情况",
    "fullscreenMenu.View.ShowOrHideUI": "显示/隐藏界面",
    "fullscreenMenu.View.MultiplayerCursors": "多人鼠标指针",
    "fullscreenMenu.View.Panels": "面板",
    "fullscreenMenu.View.ZoomIn": "放大",
    "fullscreenMenu.View.ZoomOut": "缩小",
    "fullscreenMenu.View.ZoomTo100%": "缩放至 100%",
    "fullscreenMenu.View.ZoomToFit": "缩放至适应大小",
    "fullscreenMenu.View.ZoomToSelection": "缩放至选中范围",
    "fullscreenMenu.View.PreviousPage": "上一页",
    "fullscreenMenu.View.NextPage": "下一页",
    "fullscreenMenu.View.ZoomToPreviousFrame": "缩放至上一个画框",
    "fullscreenMenu.View.ZoomToNextFrame": "缩放至下一个画框",
    "fullscreenMenu.View.FindPreviousFrame": "查找上一个画框",
    "fullscreenMenu.View.FindNextFrame": "查找下一个画框",
    "fullscreenMenu.Object": "对象",
    "fullscreenMenu.Object.GroupSelection": "对所选项进行编组",
    "fullscreenMenu.Object.CreateSection": "Create section",
    "fullscreenMenu.Object.FrameSelection": "选择画框",
    "fullscreenMenu.Object.UngroupSelection": "取消对所选项进行编组",
    "fullscreenMenu.Object.UseAsMask": "设为蒙版",
    "fullscreenMenu.Object.SetAsThumbnail": "设为封面",
    "fullscreenMenu.Object.AddAutoLayout": "添加自动布局",
    "fullscreenMenu.Object.CreateComponent": "创建组件",
    "fullscreenMenu.Object.ResetAllOverrides": "重置所有覆盖",
    "fullscreenMenu.Object.DetachInstance": "分离实例",
    "fullscreenMenu.Object.MainComponent": "转到组件母版",
    "fullscreenMenu.Object.BringToFront": "移到顶层",
    "fullscreenMenu.Object.BringForward": "上移一层",
    "fullscreenMenu.Object.SendBackward": "下移一层",
    "fullscreenMenu.Object.SendToBack": "移到底层",
    "fullscreenMenu.Object.flipHorizontal": "水平翻转",
    "fullscreenMenu.Object.flipVertical": "垂直翻转",
    "fullscreenMenu.Object.Rotate180": "旋转 180°",
    "fullscreenMenu.Object.Rotate90Left": "向左旋转 90°",
    "fullscreenMenu.Object.Rotate90Right": "向右旋转 90°",
    "fullscreenMenu.Object.FlattenSelection": "拼合所选项",
    "fullscreenMenu.Object.OutlineStroke": "轮廓化描边",
    "fullscreenMenu.Object.BooleanGroups": "布尔组合",
    "fullscreenMenu.Object.RasterizeSelection": "像素化所选项",
    "fullscreenMenu.Object.ShowOrHideSelection": "显示/隐藏所选项",
    "fullscreenMenu.Object.LockOrUnlockSelection": "锁定/解锁所选项",
    "fullscreenMenu.Object.HideOtherLayers": "隐藏其余图层",
    "fullscreenMenu.Object.CollapseLayers": "折叠图层",
    "fullscreenMenu.Object.RemoveFill": "移除填充",
    "fullscreenMenu.Object.RemoveStroke": "移除描边",
    "fullscreenMenu.Object.SwapFillAndStroke": "交换填充和描边",
    "fullscreenMenu.Vector": "矢量",
    "fullscreenMenu.Text": "文本",
    "fullscreenMenu.Arrange": "排列",
    "fullscreenMenu.Plugins": "插件",
    "fullscreenMenu.Plugins.ManagePlugins": "管理插件…",
    "fullscreenMenu.Plugins.BrowsePluginsInCommunity": "在社区中浏览插件",
    "fullscreenMenu.Integrations": "集成",
    "fullscreenMenu.Preferences": "偏好设置",
    "fullscreenMenu.Libraries": "组件库",
    "fullscreenMenu.GetDesktopApp": "下载桌面版应用",
    "fullscreenMenu.HelpAndAccount": "帮助和账户",
    "contextMenu.Copy": "复制",
    "contextMenu.PasteHere": "粘贴到这里",
    "contextMenu.CopyOrPasteAs": "复制/粘贴为",
    "contextMenu.CopyOrPasteAs.CopyAsCSS": "复制为 CSS",
    "contextMenu.CopyOrPasteAs.CopyAsSVG": "复制为 SVG",
    "contextMenu.CopyOrPasteAs.CopyAsPNG": "复制为 PNG",
    "contextMenu.CopyOrPasteAs.CopyLink": "复制链接",
    "contextMenu.Ungroup": "取消编组",
    "contextMenu.Flatten": "拼合",
    "contextMenu.ShowOrHide": "显示/隐藏",
    "contextMenu.LockOrUnlock": "锁定/解锁",
    "contextMenu.ShowOrHideComments": "显示/隐藏评论",
    "contextMenu.CursorChat": "聚焦聊天框"
};

var en = {
    "fullscreenMenu.BackToFiles": "Back to files",
    "fullscreenMenu.QuickActions": "Quick actions…",
    "fullscreenMenu.File": "File",
    "fullscreenMenu.File.NewDesignFile": "New design file",
    "fullscreenMenu.File.NewFigJamFile": "New FigJam file",
    "fullscreenMenu.File.NewFromSketchFile": "New from Sketch file…",
    "fullscreenMenu.File.PlaceImage": "Place image...",
    "fullscreenMenu.File.SaveLocalCopy": "Save local copy…",
    "fullscreenMenu.File.SaveToVersionHistory": "Save to version history…",
    "fullscreenMenu.File.ShowVersionHistory": "Show version history",
    "fullscreenMenu.File.Export": "Export…",
    "fullscreenMenu.File.ExportFramesToPDF": "Export frames to PDF…",
    "fullscreenMenu.Edit": "Edit",
    "fullscreenMenu.Edit.Undo": "Undo",
    "fullscreenMenu.Edit.Redo": "Redo",
    "fullscreenMenu.Edit.CopyAs": "Copy as",
    "fullscreenMenu.Edit.PasteOverSelection": "Paste over selection",
    "fullscreenMenu.Edit.PasteToReplace": "Paste to replace",
    "fullscreenMenu.Edit.Duplicate": "Duplicate",
    "fullscreenMenu.Edit.Delete": "Delete",
    "fullscreenMenu.Edit.SetDefaultProperties": "Set default properties",
    "fullscreenMenu.Edit.CopyProperties": "Copy properties",
    "fullscreenMenu.Edit.PasteProperties": "Paste properties",
    "fullscreenMenu.Edit.PickColor": "Pick color",
    "fullscreenMenu.Edit.SelectAll": "Select all",
    "fullscreenMenu.Edit.SelectNone": "Select none",
    "fullscreenMenu.Edit.SelectInverse": "Select inverse",
    "fullscreenMenu.Edit.SelectAllWithSameProperties": "Select all with same properties",
    "fullscreenMenu.Edit.SelectAllWithSameFill": "Select all with same fill",
    "fullscreenMenu.Edit.SelectAllWithSameStroke": "Select all with same stroke",
    "fullscreenMenu.Edit.SelectAllWithSameEffect": "Select all with same effect",
    "fullscreenMenu.Edit.SelectAllWithSameTextProperties": "Select all with same text properties",
    "fullscreenMenu.Edit.SelectAllWithSameFont": "Select all with same font",
    "fullscreenMenu.Edit.SelectAllWithSameInstance": "Select all with same instance",
    "fullscreenMenu.View": "View",
    "fullscreenMenu.View.PixelGrid": "Pixel grid",
    "fullscreenMenu.View.LayoutGrids": "Layout grids",
    "fullscreenMenu.View.Rulers": "Rulers",
    "fullscreenMenu.View.ShowSlices": "Show slices",
    "fullscreenMenu.View.Comments": "Comments",
    "fullscreenMenu.View.Outlines": "Outlines",
    "fullscreenMenu.View.PixelPreview": "Pixel preview",
    "fullscreenMenu.View.MaskOutlines": "Mask outlines",
    "fullscreenMenu.View.FrameOutlines": "Frame outlines",
    "fullscreenMenu.View.ResourceUse": "Resource use",
    "fullscreenMenu.View.ShowOrHideUI": "Show/Hide UI",
    "fullscreenMenu.View.MultiplayerCursors": "Multiplayer cursors",
    "fullscreenMenu.View.Panels": "Panels",
    "fullscreenMenu.View.ZoomIn": "Zoom in",
    "fullscreenMenu.View.ZoomOut": "Zoom out",
    "fullscreenMenu.View.ZoomTo100%": "Zoom to 100%",
    "fullscreenMenu.View.ZoomToFit": "Zoom to fit",
    "fullscreenMenu.View.ZoomToSelection": "Zoom to selection",
    "fullscreenMenu.View.PreviousPage": "Previous page",
    "fullscreenMenu.View.NextPage": "Next page",
    "fullscreenMenu.View.ZoomToPreviousFrame": "Zoom to previous frame",
    "fullscreenMenu.View.ZoomToNextFrame": "Zoom to next frame",
    "fullscreenMenu.View.FindPreviousFrame": "Find previous frame",
    "fullscreenMenu.View.FindNextFrame": "Find next frame",
    "fullscreenMenu.Object": "Object",
    "fullscreenMenu.Object.GroupSelection": "Group selection",
    "fullscreenMenu.Object.CreateSection": "Create section",
    "fullscreenMenu.Object.FrameSelection": "Frame selection",
    "fullscreenMenu.Object.UngroupSelection": "Ungroup selection",
    "fullscreenMenu.Object.UseAsMask": "Use as mask",
    "fullscreenMenu.Object.SetAsThumbnail": "Set as thumbnail",
    "fullscreenMenu.Object.AddAutoLayout": "Add auto layout",
    "fullscreenMenu.Object.CreateComponent": "Create component",
    "fullscreenMenu.Object.ResetAllOverrides": "Reset all overrides",
    "fullscreenMenu.Object.DetachInstance": "Detach instance",
    "fullscreenMenu.Object.MainComponent": "Main component",
    "fullscreenMenu.Object.BringToFront": "Bring to front",
    "fullscreenMenu.Object.BringForward": "Bring forward",
    "fullscreenMenu.Object.SendBackward": "Send backward",
    "fullscreenMenu.Object.SendToBack": "Send to back",
    "fullscreenMenu.Object.flipHorizontal": "Flip horizontal",
    "fullscreenMenu.Object.flipVertical": "Flip vertical",
    "fullscreenMenu.Object.Rotate180": "Rotate 180˚",
    "fullscreenMenu.Object.Rotate90Left": "Rotate 90˚ left",
    "fullscreenMenu.Object.Rotate90Right": "Rotate 90˚ right",
    "fullscreenMenu.Object.FlattenSelection": "Flatten selection",
    "fullscreenMenu.Object.OutlineStroke": "Outline stroke",
    "fullscreenMenu.Object.BooleanGroups": "Boolean groups",
    "fullscreenMenu.Object.RasterizeSelection": "Rasterize selection",
    "fullscreenMenu.Object.ShowOrHideSelection": "Show/Hide selection",
    "fullscreenMenu.Object.LockOrUnlockSelection": "Lock/Unlock selection",
    "fullscreenMenu.Object.HideOtherLayers": "Hide other layers",
    "fullscreenMenu.Object.CollapseLayers": "Collapse layers",
    "fullscreenMenu.Object.RemoveFill": "Remove fill",
    "fullscreenMenu.Object.RemoveStroke": "Remove stroke",
    "fullscreenMenu.Object.SwapFillAndStroke": "Swap fill and stroke",
    "fullscreenMenu.Vector": "Vector",
    "fullscreenMenu.Text": "Text",
    "fullscreenMenu.Arrange": "Arrange",
    "fullscreenMenu.Plugins": "Plugins",
    "fullscreenMenu.Plugins.ManagePlugins": "Manage plugins…",
    "fullscreenMenu.Plugins.BrowsePluginsInCommunity": "Browse plugins in Community",
    "fullscreenMenu.Integrations": "Integrations",
    "fullscreenMenu.Preferences": "Preferences",
    "fullscreenMenu.Libraries": "Libraries",
    "fullscreenMenu.GetDesktopApp": "Get desktop app",
    "fullscreenMenu.HelpAndAccount": "Help and account",
    "contextMenu.Copy": "Copy",
    "contextMenu.PasteHere": "Paste here",
    "contextMenu.CopyOrPasteAs": "Copy/Paste as",
    "contextMenu.CopyOrPasteAs.CopyAsCSS": "Copy as CSS",
    "contextMenu.CopyOrPasteAs.CopyAsSVG": "Copy as SVG",
    "contextMenu.CopyOrPasteAs.CopyAsPNG": "Copy as PNG",
    "contextMenu.CopyOrPasteAs.CopyLink": "Copy link",
    "contextMenu.Ungroup": "Ungroup",
    "contextMenu.Flatten": "Flatten",
    "contextMenu.ShowOrHide": "Show/Hide",
    "contextMenu.LockOrUnlock": "Lock/Unlock",
    "contextMenu.ShowOrHideComments": "Show/Hide comments",
    "contextMenu.CursorChat": "Cursor chat"
};

const languageDict = {
    zhCn: zhCn,
    en: en
};

const languageTranslate = function (elementName, lang) {
    const langDict = languageDict;
    return langDict[lang] && langDict[lang][elementName] ? langDict[lang][elementName] : "";
};

let observer = new MutationObserver(function (mutations) {
    let originElements = [];
    for (const mutation of mutations) {
        const nodes = mutation.addedNodes;
        if (!nodes || nodes.length == 0) {
            continue;
        }
        nodes.forEach(node => {
            originElements.push(node);
        });
    }
    const matchElement = getTargetElement(originElements);
    for (const elementName in matchElement) {
        if (Object.prototype.hasOwnProperty.call(matchElement, elementName)) {
            const element = matchElement[elementName];
            if (element) {
                element.textContent = languageTranslate(elementName, "zhCn");
            }
        }
    }
});
observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
});
