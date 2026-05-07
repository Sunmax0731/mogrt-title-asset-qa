export const productConfig = {
  "product": {
    "rank": 4,
    "tier": "P0",
    "score": 71,
    "domain": "WindowsApp",
    "ideaNo": 16,
    "ideaName": "MOGRT・タイトル素材検品",
    "repository": "mogrt-title-asset-qa",
    "publish": "GitHub Release / BOOTH",
    "priorityReason": "テンプレート崩れや長文検品は痛点が明確で、サンプル素材だけでもMVP化できる。",
    "surface": "Windows ローカル運用向け CLI と静的 HTML ダッシュボード",
    "integration": "",
    "overview": "連携ツール: After Effects / Premiere Pro。MOGRT、タイトル、ローワーサードの入力項目、プレビュー、セーフエリアを確認する。",
    "problem": "テンプレート素材は実際の文言を入れるまで崩れや不足に気づきにくい。",
    "differentiation": "サンプル文、長文、禁則処理を使って実使用に近い検査を行う。",
    "adobeHost": null,
    "adobeHostReason": null
  },
  "validation": {
    "requiredFields": [
      "id",
      "title",
      "owner",
      "source",
      "status",
      "decision"
    ],
    "recommendedFields": [
      "evidence",
      "notes",
      "tags"
    ],
    "warningStatuses": [
      "pending",
      "needs-review",
      "blocked"
    ],
    "acceptedDecisions": [
      "approved",
      "needs-fix",
      "pending",
      "rejected",
      "cataloged",
      "synced"
    ]
  },
  "qcds": {
    "scale": [
      "S+",
      "S-",
      "A+",
      "A-",
      "B+",
      "B-",
      "C+",
      "C-",
      "D+",
      "D-"
    ],
    "manualTestStatus": "手動テスト未実施",
    "manualTestUpperBound": "S-",
    "ratings": {
      "Quality": "S-",
      "Cost": "S-",
      "Delivery": "S-",
      "Satisfaction": "S-"
    }
  }
};
