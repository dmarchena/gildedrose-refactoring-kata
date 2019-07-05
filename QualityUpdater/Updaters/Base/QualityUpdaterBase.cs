namespace GildedRoseRefactoringKata.QualityUpdater.Updaters
{
    public abstract class QualityUpdaterBase : IQualityUpdater
    {
        protected readonly Item Item;

        protected QualityUpdaterBase(Item item)
        {
            Item = item;
        }

        public abstract void Update();

        protected abstract void CustomUpdate();

        protected void ClassicalQualityUpdate()
        {
            if (Item.Quality < 50)
            {
                Item.Quality += 1;
            }
        }

        protected void KeepLimits()
        {
            if (Item.Quality < 0)
            {
                Item.Quality = 0;
            }
        }
    }
}