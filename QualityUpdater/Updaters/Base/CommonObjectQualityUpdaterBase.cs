namespace GildedRoseRefactoringKata.QualityUpdater.Updaters
{
    public abstract class CommonObjectQualityUpdaterBase : QualityUpdaterBase
    {
        protected CommonObjectQualityUpdaterBase(Item item) : base(item)
        {
        }

        public override void Update()
        {
            Item.SellIn -= 1;

            CustomUpdate();
            KeepLimits();
        }
    }
}